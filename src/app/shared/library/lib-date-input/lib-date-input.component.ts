import { Component, ElementRef, Input, ViewChild } from '@angular/core';

import { LibInputComponent } from '../lib-input/lib-input.component';
import { FormControl } from '@angular/forms';
import { LibFontComponent } from '../lib-font/lib-font.component';
import { LibAssistiveErrorComponent } from '../lib-assistive-error/lib-assistive-error.component';
import { signal, effect } from '@angular/core';

@Component({
  selector: 'lib-date-input',
  standalone: true,
  imports: [
    LibInputComponent,
    LibFontComponent,
    LibAssistiveErrorComponent
],
  templateUrl: './lib-date-input.component.html',
  styleUrl: './lib-date-input.component.scss',
})
export class LibDateInputComponent {
  @Input()
  id?: string;
  @Input({ required: true })
  text!: string;
  @Input()
  placeholder?: string;
  @Input()
  suggestionList: string[] = [];
  @Input()
  control: FormControl = new FormControl({
    value: 'dd/mm/yyyy',
    disabled: false,
  });
  @Input()
  errorMessages?: Record<string, string>;
  @Input()
  assistiveText?: string = '';
  @Input()
  ariaLabel?: string;
  @Input()
  required?: boolean;

  @ViewChild('container', { static: false }) containerRef!: ElementRef;

  selectedMonthIndex = signal<number>(new Date().getMonth());
  selectedYear = signal<number>(new Date().getFullYear());
  selectedMonthDataSignal = signal<(number | undefined)[][]>([]);

  isDropdownOpen = false;

  selectedMonthData: (number | undefined)[][] = [];

  monthArray: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  constructor() {
    effect(() => {
      this.selectedMonthDataSignal.set(
        this.getCalendarData(this.selectedMonthIndex(), this.selectedYear())
      );
    });
  }

  onClickOpen() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  onFocusOut(event: FocusEvent) {
    const relatedTarget = event.relatedTarget as HTMLElement;
    if (!this.containerRef.nativeElement.contains(relatedTarget)) {
      this.isDropdownOpen = false;
    }
  }

  getErrorMessage() {
    if (!this.control.errors || !this.errorMessages) return null;

    const firstErrorKey = Object.keys(this.control.errors)[0];

    return this.errorMessages[firstErrorKey];
  }

  getDaysInMonth(year: number, month: number): number {
    return new Date(year, month + 1, 0).getDate();
  }

  getFirstDayOfMonth(year: number, month: number): number {
    return new Date(year, month, 1).getDay();
  }

  getCalendarData(month: number, year: number) {
    const totalDays = new Date(year, month + 1, 0).getDate();
    const startDay = new Date(year, month, 1).getDay();

    const resArray = [];
    let i = 1;
    while (i <= totalDays) {
      const weekArray = this.getWeekArray(
        i,
        totalDays,
        i === 1 ? startDay : undefined
      );
      resArray.push(weekArray);
      const lastElement = weekArray[6];

      if (!lastElement) {
        break;
      }

      i = lastElement + 1;
    }
    return resArray;
  }

  getWeekArray(firstDay: number, lastDay: number, startDay?: number) {
    const resArray =
      firstDay + 7 <= lastDay
        ? new Array(7).fill(-1)
        : new Array(lastDay - firstDay + 1).fill(-1);
    let actualDay = firstDay;

    return resArray.map((_, i) => {
      return startDay && i < startDay ? undefined : actualDay++;
    });
  }

  getControllerData() {
    const selectedDateArray = this.control.value.split('/');
    return {
      day: selectedDateArray[0],
      month: selectedDateArray[1],
      year: selectedDateArray[2],
    };
  }

  onClickDayButton(day: number) {
    this.control.setValue(
      `${day}/${this.parseMonth(this.selectedMonthIndex() + 1)}/${this.selectedYear()}`
    );
    this.isDropdownOpen = false;
  }

  parseMonth(month: number) {
    return month < 10 ? `0${month}` : month;
  }

  onClickArrowButton(direction: 'left' | 'right') {
    if (direction === 'left') {
      if (this.selectedMonthIndex() === 0) {
        this.selectedMonthIndex.set(11);
        this.selectedYear.set(this.selectedYear() - 1);
      } else {
        this.selectedMonthIndex.set(this.selectedMonthIndex() - 1);
      }
    } else {
      if (this.selectedMonthIndex() === 11) {
        this.selectedMonthIndex.set(0);
        this.selectedYear.set(this.selectedYear() + 1);
      } else {
        this.selectedMonthIndex.set(this.selectedMonthIndex() + 1);
      }
    }
  }

  trackBy(element1: number, element2?: number) {
    return element1.toString() + '-' + element2?.toString();
  }
}

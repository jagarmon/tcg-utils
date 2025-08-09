import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibInputComponent } from '../lib-input/lib-input.component';
import { FormControl } from '@angular/forms';
import { LibFontComponent } from '../lib-font/lib-font.component';
import { LibAssistiveErrorComponent } from '../lib-assistive-error/lib-assistive-error.component';

@Component({
  selector: 'lib-dropdown',
  standalone: true,
  imports: [
    CommonModule,
    LibInputComponent,
    LibFontComponent,
    LibAssistiveErrorComponent,
  ],
  templateUrl: './lib-dropdown.component.html',
  styleUrl: './lib-dropdown.component.scss',
})
export class LibDropdownComponent {
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
    value: undefined,
    disabled: true,
  });
  @Input()
  errorMessages?: Record<string, string>;
  @Input()
  assistiveText?: string = '';
  @Input()
  ariaLabel?: string;
  @Input()
  required?: boolean;

  isDropdownOpen = false;

  onClickOpen() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  onClickSuggestion(suggestion: string) {
    this.control.setValue(suggestion);
    this.isDropdownOpen = false;
  }

  getErrorMessage() {
    if (!this.control.errors || !this.errorMessages) return null;

    const firstErrorKey = Object.keys(this.control.errors)[0];

    return this.errorMessages[firstErrorKey];
  }
}

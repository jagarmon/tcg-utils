import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { LibFontComponent } from '../lib-font/lib-font.component';
import { LibButtonComponent } from '../lib-button/lib-button.component';
import { LibAssistiveErrorComponent } from '../lib-assistive-error/lib-assistive-error.component';

@Component({
  standalone: true,
  selector: 'lib-input',
  templateUrl: './lib-input.component.html',
  styleUrls: ['./lib-input.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LibFontComponent,
    LibButtonComponent,
    LibAssistiveErrorComponent,
  ],
})
export class LibInputComponent {
  @Input() id?: string;
  @Input({ required: true }) text!: string;
  @Input() placeholder?: string = '';
  @Input() assistiveText?: string = '';
  @Input() errorMessages?: Record<string, string>;
  @Input() required?: boolean = false;
  @Input() control: FormControl = new FormControl({
    value: undefined,
    disabled: false,
  });
  @Input() ariaLabel?: string;
  @Input() icon?: string;
  @Input() isReadOnly?: boolean;
  @Input() isClickable?: boolean;
  @Input() fullWidth = false;
  @Output() clickIconEvent = new EventEmitter<Event>();
  @Output() clickInputEvent = new EventEmitter<Event>();

  getErrorMessage() {
    if (!this.control.errors || !this.errorMessages) return null;

    const firstErrorKey = Object.keys(this.control.errors)[0];

    return this.errorMessages[firstErrorKey];
  }

  onClickIcon() {
    this.clickIconEvent.emit();
  }

  onClickInput() {
    this.clickInputEvent.emit();
  }
}

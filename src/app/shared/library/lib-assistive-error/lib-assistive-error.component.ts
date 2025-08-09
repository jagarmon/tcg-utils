import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'lib-assistive-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lib-assistive-error.component.html',
  styleUrl: './lib-assistive-error.component.scss',
})
export class LibAssistiveErrorComponent {
  @Input({ required: true })
  control!: FormControl;
  @Input()
  errorMessages?: Record<string, string>;
  @Input()
  assistiveText?: string = '';

  getErrorMessage() {
    if (!this.control.errors || !this.errorMessages) return null;

    const firstErrorKey = Object.keys(this.control.errors)[0];

    return this.errorMessages[firstErrorKey];
  }
}

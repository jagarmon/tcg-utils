import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';
import { LibFontComponent } from '../lib-font/lib-font.component';

@Component({
  selector: 'lib-assistive-error',
  standalone: true,
  imports: [CommonModule, LibFontComponent],
  templateUrl: './lib-assistive-error.component.html',
  styleUrl: './lib-assistive-error.component.scss',
})
export class LibAssistiveErrorComponent {
  @Input({ required: true })
  control!: FormControl;
  @Input()
  errorMessages?: Record<string, string>;
  @Input()
  assistiveText = '';

  getErrorMessage() {
    if (!this.control.errors || !this.errorMessages) return '';

    const firstErrorKey = Object.keys(this.control.errors)[0];

    return this.errorMessages[firstErrorKey];
  }
}

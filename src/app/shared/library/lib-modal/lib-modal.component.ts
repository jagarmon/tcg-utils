import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LibFontComponent } from '../lib-font/lib-font.component';
import { LibButtonComponent } from '../lib-button/lib-button.component';
import { LibInputComponent } from '../lib-input/lib-input.component';
import { LibDateInputComponent } from '../lib-date-input/lib-date-input.component';

@Component({
  standalone: true,
  selector: 'lib-modal',
  templateUrl: './lib-modal.component.html',
  styleUrls: ['./lib-modal.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LibFontComponent,
    LibButtonComponent,
  ],
})
export class LibModalComponent {
  @Input()
  isOpen?: boolean;
  @Input()
  title!: string;
  @Output()
  submitEvent = new EventEmitter<void>();
  @Output()
  closeEvent = new EventEmitter<void>();

  onClickSubmit() {
    this.submitEvent.emit();
  }
  onClickClose() {
    this.closeEvent.emit();
  }
}

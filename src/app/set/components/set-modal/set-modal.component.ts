import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LibModalComponent } from '../../../shared/library/lib-modal/lib-modal.component';
import { LibInputComponent } from '../../../shared/library/lib-input/lib-input.component';
import { LibDateInputComponent } from '../../../shared/library/lib-date-input/lib-date-input.component';
import { LibImageUploaderComponent } from '../../../shared/library/lib-image-uploader/lib-image-uploader.component';
import { FormService } from '../../../shared/library/utils/form.service';

@Component({
  imports: [
    ReactiveFormsModule,
    LibModalComponent,
    LibInputComponent,
    LibDateInputComponent,
    LibImageUploaderComponent,
  ],
  providers: [FormService],
  selector: 'create-set-modal',
  standalone: true,
  templateUrl: './set-modal.component.html',
  styleUrl: './set-modal.component.scss',
})
export class CreateSetModalComponent {
  @Input() isOpen = false;
  @Input() mode: 'create' | 'edit' = 'create';
  @Output() closeEvent = new EventEmitter<void>();

  readonly formService = inject(FormService);

  onClickSubmit() {
    if (this.mode === 'create') {
      console.log('create');
    } else {
      console.log('edit');
    }
    this.closeEvent.emit();
  }
  onClickClose() {
    this.closeEvent.emit();
  }
}

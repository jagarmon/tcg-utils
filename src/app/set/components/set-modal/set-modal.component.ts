import {
  Component,
  effect,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LibModalComponent } from '../../../shared/library/lib-modal/lib-modal.component';
import { LibInputComponent } from '../../../shared/library/lib-input/lib-input.component';
import { LibDateInputComponent } from '../../../shared/library/lib-date-input/lib-date-input.component';
import { LibImageUploaderComponent } from '../../../shared/library/lib-image-uploader/lib-image-uploader.component';
import { FormService } from '../../../shared/library/utils/form.service';
import { SetStore } from '../../store/set.store';

@Component({
  imports: [
    ReactiveFormsModule,
    LibModalComponent,
    LibInputComponent,
    LibDateInputComponent,
    LibImageUploaderComponent,
  ],
  providers: [FormService],
  selector: 'set-modal',
  standalone: true,
  templateUrl: './set-modal.component.html',
  styleUrl: './set-modal.component.scss',
})
export class SetModalComponent {
  @Input() isOpen = false;
  @Input() mode: 'create' | 'edit' = 'create';
  @Output() closeEvent = new EventEmitter<void>();

  readonly formService = inject(FormService);
  readonly setStore = inject(SetStore);

  setForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    release: new FormControl('', Validators.required),
    image: new FormControl(''),
  });

  onClickSubmit() {
    this.setForm.markAllAsTouched();
    if (!this.setForm.valid) return;
    const selectedSetId = this.setStore.selectedId?.();

    if (this.mode === 'create') {
      this.setStore.create({
        name: this.setForm.value.name!,
        release: this.setForm.value.release!,
        image: this.setForm.value.image ?? '',
      });
    } else if (selectedSetId) {
      this.setStore.edit(selectedSetId, {
        name: this.setForm.value.name!,
        release: this.setForm.value.release!,
        image: this.setForm.value.image ?? '',
      });
    }
    this.onClickClose();
  }

  onClickClose() {
    this.setForm.reset();
    this.setStore.emptySelectedId();
    this.closeEvent.emit();
  }

  constructor() {
    effect(() => {
      const selectedSetId = this.setStore.selectedId?.();
      if (selectedSetId && this.mode === 'edit') {
        const setData = this.setStore.entityMap()[selectedSetId];
        this.setForm.patchValue({
          name: setData.name ?? '',
          release: setData.release ?? '',
          image: setData.image ?? '',
        });
      }
    });
  }
}

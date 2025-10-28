import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormService } from '../shared/library/utils/form.service';
import { LibModalComponent } from '../shared/library/lib-modal/lib-modal.component';
import { LibButtonComponent } from '../shared/library/lib-button/lib-button.component';
import { LibInputComponent } from '../shared/library/lib-input/lib-input.component';
import { LibDateInputComponent } from '../shared/library/lib-date-input/lib-date-input.component';
import { LibImageUploaderComponent } from '../shared/library/lib-image-uploader/lib-image-uploader.component';

@Component({
  imports: [
    ReactiveFormsModule,
    LibModalComponent,
    LibButtonComponent,
    LibInputComponent,
    LibDateInputComponent,
    LibImageUploaderComponent,
  ],
  providers: [FormService],
  standalone: true,
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss',
})
export class CollectionComponent {
  formService = inject(FormService);
  isModalOpen = false;

  onClickButton() {
    this.isModalOpen = !this.isModalOpen;
  }

  onClickClose() {
    this.isModalOpen = false;
  }
}

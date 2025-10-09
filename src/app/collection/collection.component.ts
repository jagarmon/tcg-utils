import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormService } from '../shared/library/utils/form.service';
import { LibModalComponent } from '../shared/library/lib-modal/lib-modal.component';
import { LibButtonComponent } from '../shared/library/lib-button/lib-button.component';

@Component({
  imports: [ReactiveFormsModule, LibModalComponent, LibButtonComponent],
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

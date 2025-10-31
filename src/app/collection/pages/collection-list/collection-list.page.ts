import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormService } from '../../../shared/library/utils/form.service';
import { LibButtonComponent } from '../../../shared/library/lib-button/lib-button.component';
import { CreateSetModalComponent } from '../../../set/components/set-modal/set-modal.component';

@Component({
  imports: [ReactiveFormsModule, LibButtonComponent, CreateSetModalComponent],
  providers: [FormService],
  standalone: true,
  templateUrl: './collection-list.page.html',
  styleUrl: './collection-list.page.scss',
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

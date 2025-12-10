import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormService } from '../../../shared/library/utils/form.service';
import { LibButtonComponent } from '../../../shared/library/lib-button/lib-button.component';
import { CreateSetModalComponent } from '../../../set/components/set-modal/set-modal.component';
import { SetStore } from '../../../set/store/set.store';
import { LibListComponent } from '../../../shared/library/lib-list/lib-list.component';

@Component({
  imports: [
    ReactiveFormsModule,
    LibButtonComponent,
    CreateSetModalComponent,
    LibListComponent,
  ],
  providers: [FormService],
  standalone: true,
  templateUrl: './collection-list.page.html',
  styleUrl: './collection-list.page.scss',
})
export class CollectionComponent {
  readonly formService = inject(FormService);
  readonly setStore = inject(SetStore);
  isModalOpen = false;

  onClickListElement(event?: number) {
    console.log('Click -> ', event);
  }

  onDeleteListElement(event?: number) {
    console.log('Delete -> ', event);
  }
  onClickButton() {
    this.isModalOpen = !this.isModalOpen;
  }

  onClickClose() {
    this.isModalOpen = false;
  }
}

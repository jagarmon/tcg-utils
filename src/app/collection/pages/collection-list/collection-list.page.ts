import { Component, computed, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormService } from '../../../shared/library/utils/form.service';
import { LibButtonComponent } from '../../../shared/library/lib-button/lib-button.component';
import { SetModalComponent } from '../../../set/components/set-modal/set-modal.component';
import { SetStore } from '../../../set/store/set.store';
import { LibListComponent } from '../../../shared/library/lib-list/lib-list.component';

@Component({
  imports: [
    ReactiveFormsModule,
    LibButtonComponent,
    SetModalComponent,
    LibListComponent,
  ],
  providers: [FormService],
  standalone: true,
  templateUrl: './collection-list.page.html',
  styleUrl: './collection-list.page.scss',
})
export class CollectionListComponent {
  readonly formService = inject(FormService);
  readonly setStore = inject(SetStore);
  isModalOpen = false;
  modalMode: 'create' | 'edit' = 'create';

  listItems = computed(() =>
    this.setStore.nameIdList().map(i => ({ displayName: i.name, item: i.id }))
  );

  onClickListElement(id: number) {
    this.modalMode = 'edit';
    this.setStore.setSelectedId(id);
    this.openModal();
  }

  onDeleteListElement(id: number) {
    this.setStore.delete(id);
  }

  onClickButton() {
    this.modalMode = 'create';
    this.openModal();
  }

  openModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  onClickClose() {
    this.isModalOpen = false;
  }
}

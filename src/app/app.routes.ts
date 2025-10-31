import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'collection',
    loadComponent: () =>
      import('./collection/pages/collection-list/collection-list.page').then(
        comp => comp.CollectionComponent
      ),
  },
];

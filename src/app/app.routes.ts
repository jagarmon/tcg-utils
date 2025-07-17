import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'collection',
    loadComponent: () =>
      import('./collection/collection.component').then(
        comp => comp.CollectionComponent
      ),
  },
];

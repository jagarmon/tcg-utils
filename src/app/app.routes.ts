import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/collection', pathMatch: 'full' },
  {
    path: 'collection',
    loadComponent: () =>
      import('./collection/pages/collection-list/collection-list.page').then(
        comp => comp.CollectionListComponent
      ),
  },
  // { path: '**', component: PageNotFoundComponent }
];

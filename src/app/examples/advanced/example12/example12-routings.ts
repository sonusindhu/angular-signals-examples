import { Route } from '@angular/router';

const EXAMPLE12_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('./user-list/user-list.component').then(m => m.UserListComponent),
  },
  {
    path: 'user-form',
    loadComponent: () => import('./user-form/user-form.component').then(m => m.UserFormComponent),
    data: { preloadOnDemand: true },
  },
];

export default EXAMPLE12_ROUTES;

import { Route } from '@angular/router';

const ADVANCED_ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./signal-forms.component'),
  },
  {
    path: 'example1',
    loadComponent: () => import('./example1/example1.component').then(x => x.FormExample1Component),
  }
];

export default ADVANCED_ROUTES;
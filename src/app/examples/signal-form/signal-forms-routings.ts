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
  },
  {
    path: 'example2',
    loadComponent: () => import('./example2/example2.component').then(x => x.FormExample2Component),
  }
];

export default ADVANCED_ROUTES;
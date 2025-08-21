import { Route } from '@angular/router';

const ADVANCED_ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./advanced.component'),
  },
  {
    path: 'example1',
    loadComponent: () =>
      import('./advanced-example1/advanced-example1.component').then(x => x.AdvancedExample1Component),
  },
]
export default ADVANCED_ROUTES;

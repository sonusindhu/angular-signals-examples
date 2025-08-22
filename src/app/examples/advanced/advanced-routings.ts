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
  {
    path: 'example2',
    loadComponent: () =>
      import('./advanced-example-2/advanced-example-2.component').then(x => x.AdvancedExample2Component),
  },
  {
    path: 'example3',
    loadComponent: () =>
      import('./advanced-example3/advanced-example3.component').then(x => x.AdvancedExample3Component),
  },
]
export default ADVANCED_ROUTES;

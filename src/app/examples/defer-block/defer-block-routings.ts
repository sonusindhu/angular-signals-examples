import { Route } from '@angular/router';

const ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./defer-block.component'),
  },
  {
    path: 'defer-example1',
    loadComponent: () =>
      import('./defer-example1/defer-example1.component'),
  },
  {
    path: 'defer-example2',
    loadComponent: () =>
      import('./defer-example2/defer-example2.component'),
  },
  {
    path: 'defer-example3',
    loadComponent: () =>
      import('./defer-example3/defer-example3.component'),
  },
  {
    path: 'defer-example4',
    loadComponent: () =>
      import('./defer-example4/defer-example4.component'),
  },
  {
    path: 'defer-example5',
    loadComponent: () =>
      import('./defer-example5/defer-example5.component'),
  },
];

export default ROUTES;

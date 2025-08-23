import { Route } from '@angular/router';

const ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./defer-block.component'),
  },
  {
    path: 'example1',
    loadComponent: () =>
      import('./defer-example1/defer-example1.component'),
  },
  {
    path: 'example2',
    loadComponent: () =>
      import('./defer-example2/defer-example2.component'),
  },
  {
    path: 'example3',
    loadComponent: () =>
      import('./defer-example3/defer-example3.component'),
  },
  {
    path: 'example4',
    loadComponent: () =>
      import('./defer-example4/defer-example4.component'),
  },
  {
    path: 'example5',
    loadComponent: () =>
      import('./defer-example5/defer-example5.component'),
  },
  {
    path: 'example6',
    loadComponent: () =>
      import('./defer-example6/defer-example6.component'),
  },
  {
    path: 'example7',
    loadComponent: () =>
      import('./defer-example7/defer-example7.component'),
  },
  {
    path: 'example8',
    loadComponent: () =>
      import('./defer-example8/defer-example8.component'),
  },
  {
    path: 'example9',
    loadComponent: () =>
      import('./defer-example9/defer-example9.component'),
  },
  {
    path: 'example10',
    loadComponent: () =>
      import('./defer-example10/defer-example10.component'),
  },
  {
    path: 'example11',
    loadComponent: () =>
      import('./defer-example11/defer-example11.component'),
  },
];

export default ROUTES;

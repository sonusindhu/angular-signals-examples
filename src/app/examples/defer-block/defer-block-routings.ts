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
  {
    path: 'defer-example6',
    loadComponent: () =>
      import('./defer-example6/defer-example6.component'),
  },
  {
    path: 'defer-example7',
    loadComponent: () =>
      import('./defer-example7/defer-example7.component'),
  },
  {
    path: 'defer-example8',
    loadComponent: () =>
      import('./defer-example8/defer-example8.component'),
  },
  {
    path: 'defer-example9',
    loadComponent: () =>
      import('./defer-example9/defer-example9.component'),
  },
  {
    path: 'defer-example10',
    loadComponent: () =>
      import('./defer-example10/defer-example10.component'),
  },
  {
    path: 'defer-example11',
    loadComponent: () =>
      import('./defer-example11/defer-example11.component'),
  },
];

export default ROUTES;

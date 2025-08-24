import { Route } from '@angular/router';

const LINKED_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('./linked-signal.component'),
  },
  {
    path: 'example1',
    loadComponent: () => import('./ls-example1/ls-example1.component'),
  },
  {
    path: 'example2',
    loadComponent: () => import('./ls-example2/ls-example2.component').then(c => c.LsExample2Component),
  },
  {
    path: 'example3',
    loadComponent: () => import('./ls-example3/ls-example3.component').then(c => c.LsExample3Component),
  },
  {
    path: 'example4',
    loadComponent: () => import('./ls-example4/ls-example4.component').then(c => c.LsExample4Component),
  },
  {
    path: 'example5',
    loadComponent: () => import('./ls-example5/ls-example5.component').then(c => c.LsExample5Component),
  },
  {
    path: 'example6',
    loadComponent: () => import('./ls-example6/ls-example6.component').then(c => c.LsExample6Component),
  },
];

export default LINKED_ROUTES;

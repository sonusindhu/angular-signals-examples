import { Route } from '@angular/router';
import SignalComponent from './signal.component';

const ROUTES: Route[] = [
  {
    path: '',
    component: SignalComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'signal-example1',
      },
      {
        path: 'signal-example1',
        loadComponent: () =>
          import('./signal-example1/signal-example1.component'),
      },
      {
        path: 'signal-example2',
        loadComponent: () =>
          import('./signal-example2/signal-example2.component'),
      },
      {
        path: 'signal-example3',
        loadComponent: () =>
          import('./signal-example3/signal-example3.component'),
      },
      {
        path: 'signal-example4',
        loadComponent: () =>
          import('./signal-example4/signal-example4.component'),
      },
      {
        path: 'signal-example5',
        loadComponent: () =>
          import('./signal-example5/signal-example5.component'),
      },
      {
        path: 'signal-example6',
        loadComponent: () =>
          import('./signal-example6/signal-example6.component'),
      },
      {
        path: 'signal-example7',
        loadComponent: () =>
          import('./signal-example7/signal-example7.component'),
      },
      {
        path: 'signal-example8',
        loadComponent: () =>
          import('./signal-example8/signal-example8.component'),
      },
      {
        path: 'signal-example9',
        loadComponent: () =>
          import('./signal-example9/signal-example9.component'),
      },
      {
        path: 'signal-example10',
        loadComponent: () =>
          import('./signal-example10/signal-example10.component'),
      },
      {
        path: 'signal-example11',
        loadComponent: () =>
          import('./signal-example11/signal-example11.component'),
      },
      {
        path: 'signal-example12',
        loadComponent: () =>
          import('./signal-example12/signal-example12.component'),
      },
      {
        path: 'signal-example13',
        loadComponent: () =>
          import('./signal-example13/signal-example13.component'),
      },
      {
        path: 'signal-example14',
        loadComponent: () => import('./signal-example14/signal-example14.component'),
      },
      {
        path: 'signal-example15',
        loadComponent: () => import('./signal-example15/signal-example15.component'),
      },
      {
        path: 'signal-example16',
        loadComponent: () => import('./signal-example16/signal-example16.component'),
      },
    ],
  },
];

export default ROUTES;

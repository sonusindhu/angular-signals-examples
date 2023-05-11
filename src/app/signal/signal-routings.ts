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
    ],
  },
];

export default ROUTES;

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
    ],
  },
];

export default ROUTES;

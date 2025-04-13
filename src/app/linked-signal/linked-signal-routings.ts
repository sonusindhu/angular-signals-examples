import { Route } from '@angular/router';
import LinkedSignalComponent from './linked-signal.component';

const LINKED_ROUTES: Route[] = [
  {
    path: '',
    component: LinkedSignalComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'example1',
      },
      {
        path: 'example1',
        loadComponent: () => import('./ls-example1/ls-example1.component'),
      },
    ],
  },
];

export default LINKED_ROUTES;

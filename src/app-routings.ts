import { Route } from '@angular/router';
import { HomeComponent } from './app/home/home.component';

export const ROUTES: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'signal',
    loadChildren: () => import('./app/examples/signal/signal-routings'),
  },
  {
    path: 'linked-signal',
    loadChildren: () => import('./app/examples/linked-signal/linked-signal-routings'),
  },
  {
    path: 'table',
    loadComponent: () => import('./app/table/table.component'),
  },
  {
    path: '**',
    redirectTo: ''
  },
];

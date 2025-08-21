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
    path: 'resource-api',
    loadChildren: () => import('./app/examples/resource-api/resource-api-routings'),
  },
  {
    path: 'defer-block',
    loadChildren: () => import('./app/examples/defer-block/defer-block-routings'),
  },
  {
    path: 'control-flow',
    loadChildren: () => import('./app/examples/control-flow/control-flow-routings'),
  },
  {
    path: 'advanced',
    loadChildren: () => import('./app/examples/advanced/advanced-routings'),
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

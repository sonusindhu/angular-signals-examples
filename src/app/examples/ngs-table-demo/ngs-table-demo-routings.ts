import { Route } from '@angular/router';

const ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('./ngs-table-demo.component').then(m => m.NgsTableDemoComponent),
  },
  {
    path: 'example1',
    loadComponent: () =>
      import('./example1/example1.component').then(m => m.NgsTableExample1Component),
  },
];

export default ROUTES;

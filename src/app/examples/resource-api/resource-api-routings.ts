import { Route } from '@angular/router';
import ResourceApiComponent from './resource-api.component';

const RESOURCE_API_ROUTES: Route[] = [
  {
    path: '',
    component: ResourceApiComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'resource-api-example1',
      },
      {
        path: 'resource-api-example1',
        loadComponent: () =>
          import('./resource-api-example1/resource-api-example1.component').then(x => x.ResourceApiExample1Component),
      },
      
    ],
  },
];

export default RESOURCE_API_ROUTES;

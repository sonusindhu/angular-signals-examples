import { Route } from '@angular/router';
import ResourceApiComponent from './resource-api.component';

const RESOURCE_API_ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./resource-api.component'),
  },
  {
    path: 'resource-api-example1',
    loadComponent: () =>
      import('./resource-api-example1/resource-api-example1.component').then(x => x.ResourceApiExample1Component),
  },
  {
    path: 'resource-api-example2',
    loadComponent: () =>
      import('./resource-api-example2/resource-api-example2.component').then(x => x.ResourceApiExample2Component),
  },
  {
    path: 'resource-api-example3',
    loadComponent: () =>
      import('./resource-api-example3/resource-api-example3.component').then(x => x.ResourceApiExample3Component),
  },
  {
    path: 'resource-api-example4',
    loadComponent: () =>
      import('./resource-api-example4/resource-api-example4.component').then(x => x.ResourceApiExample4Component),
  },
  {
    path: 'resource-api-example5',
    loadComponent: () =>
      import('./resource-api-example5/resource-api-example5.component').then(x => x.ResourceApiExample5Component),
  },
  {
    path: 'resource-api-example6',
    loadComponent: () =>
      import('./resource-api-example6/resource-api-example6.component').then(x => x.ResourceApiExample6Component),
  },
]
export default RESOURCE_API_ROUTES;

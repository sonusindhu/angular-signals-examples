import { Route } from '@angular/router';

const RESOURCE_API_ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./resource-api.component'),
  },
  {
    path: 'example1',
    loadComponent: () =>
      import('./resource-api-example1/resource-api-example1.component').then(x => x.ResourceApiExample1Component),
  },
  {
    path: 'example2',
    loadComponent: () =>
      import('./resource-api-example2/resource-api-example2.component').then(x => x.ResourceApiExample2Component),
  },
  {
    path: 'example3',
    loadComponent: () =>
      import('./resource-api-example3/resource-api-example3.component').then(x => x.ResourceApiExample3Component),
  },
  {
    path: 'example4',
    loadComponent: () =>
      import('./resource-api-example4/resource-api-example4.component').then(x => x.ResourceApiExample4Component),
  },
  {
    path: 'example5',
    loadComponent: () =>
      import('./resource-api-example5/resource-api-example5.component').then(x => x.ResourceApiExample5Component),
  },
  {
    path: 'example6',
    loadComponent: () =>
      import('./resource-api-example6/resource-api-example6.component').then(x => x.ResourceApiExample6Component),
  },
  {
    path: 'example7',
    loadComponent: () =>
      import('./resource-api-example7/resource-api-example7.component').then(x => x.ResourceApiExample7Component),
  },
  {
    path: 'example8',
    loadComponent: () =>
      import('./resource-api-example8/resource-api-example8.component').then(x => x.ResourceApiExample8Component),
  },
  {
    path: 'example9',
    loadComponent: () =>
      import('./resource-api-example9/resource-api-example9.component').then(x => x.ResourceApiExample9Component),
  },
]
export default RESOURCE_API_ROUTES;

import { Route } from '@angular/router';

const ADVANCED_ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./advanced.component'),
  },
  {
    path: 'example1',
    loadComponent: () =>
      import('./advanced-example1/advanced-example1.component').then(x => x.AdvancedExample1Component),
  },
  {
    path: 'example2',
    loadComponent: () =>
      import('./advanced-example-2/advanced-example-2.component').then(x => x.AdvancedExample2Component),
  },
  {
    path: 'example3',
    loadComponent: () =>
      import('./advanced-example3/advanced-example3.component').then(x => x.AdvancedExample3Component),
  },
  {
    path: 'example4',
    loadComponent: () =>
      import('./advanced-example4/advanced-example4.component').then(x => x.AdvancedExample4Component),
  },
  {
    path: 'example5',
    loadComponent: () =>
      import('./advanced-example5/advanced-example5.component').then(x => x.AdvancedExample5Component),
  },
  {
    path: 'example6',
    loadComponent: () =>
      import('./example6/example6.component').then(x => x.Example6Component),
  },
  {
    path: 'example7',
    loadComponent: () =>
      import('./example7/example7.component').then(x => x.Example7Component),
  },
]
export default ADVANCED_ROUTES;

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
      import('./example1/example1.component').then(x => x.AdvancedExample1Component),
  },
  {
    path: 'example2',
    loadComponent: () =>
      import('./example2/example2.component').then(x => x.AdvancedExample2Component),
  },
  {
    path: 'example3',
    loadComponent: () =>
      import('./example3/example3.component').then(x => x.AdvancedExample3Component),
  },
  {
    path: 'example4',
    loadComponent: () =>
      import('./example4/example4.component').then(x => x.AdvancedExample4Component),
  },
  {
    path: 'example5',
    loadComponent: () =>
      import('./example5/example5.component').then(x => x.AdvancedExample5Component),
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
  {
    path: 'example8',
    loadComponent: () =>
      import('./example8/example8.component').then(x => x.Example8Component),
  },
  {
    path: 'example9',
    loadComponent: () =>
      import('./example9/example9.component').then(x => x.Example9Component),
  },
  {
    path: 'example10',
    loadComponent: () =>
      import('./example10/example10.component').then(x => x.Example10Component),
  },
  {
    path: 'example11',
    loadComponent: () =>
      import('./example11/example11.component').then(x => x.Example11Component),
  },
]
export default ADVANCED_ROUTES;

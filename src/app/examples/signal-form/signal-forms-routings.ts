import { Route } from '@angular/router';

const ADVANCED_ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./signal-forms.component'),
  },
  {
    path: 'example1',
    loadComponent: () => import('./example1/example1.component').then(x => x.FormExample1Component),
  },
  {
    path: 'example2',
    loadComponent: () => import('./example2/example2.component').then(x => x.FormExample2Component),
  },
  {
    path: 'example3',
    loadComponent: () => import('./example3/example3.component').then(x => x.FormExample3Component),
  },
  {
    path: 'example4',
    loadComponent: () => import('./example4/example4.component').then(x => x.FormExample4Component),
  },
  {
    path: 'example5',
    loadComponent: () => import('./example5/example5.component').then(x => x.FormExample5Component),
  },
  {
    path: 'example6',
    loadComponent: () => import('./example6/example6.component').then(x => x.Example6Component),
  },
  {
    path: 'example7',
    loadComponent: () => import('./example7/example7.component').then(x => x.Example7Component),
  }
];

export default ADVANCED_ROUTES;
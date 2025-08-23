import { Routes } from '@angular/router';



const CONTROL_FLOW_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./control-flow.component').then(m => m.ControlFlowComponent),
    },
  
  {
    path: 'example1',
    loadComponent: () => import('./if-section/if-example-1/if-example-1.component').then(x => x.IfExample1Component),
  },
  {
    path: 'example2',
    loadComponent: () => import('./for-section/for-example-1/for-example-1.component').then(x => x.ForExample1Component),
  },
  {
    path: 'example3',
    loadComponent: () => import('./switch-section/switch-example-1/switch-example-1.component').then(x => x.SwitchExample1Component),
  },
  {
    path: '**',
    redirectTo: ''
  }
];

export default CONTROL_FLOW_ROUTES;
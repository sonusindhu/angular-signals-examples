import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ngs-table-demo',
  imports: [MatCardModule, RouterModule],
  templateUrl: './ngs-table-demo.component.html',
  styleUrl: './ngs-table-demo.component.scss',
})
export class NgsTableDemoComponent {
  

  ngsTableExamples = signal([
      {
        title: 'Simple Table Example',
        content: 'A basic usage of ngs-table with selection and column chooser.',
        routerLink: '/ngs-table-demo/example1',
      }
    ]);
}


import { Component, signal, WritableSignal } from '@angular/core';

import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

interface ExampleCard {
  title: string;
  content: string;
  routerLink: string;
}

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [RouterModule, MatCardModule, MatGridListModule, MatIconModule],
  templateUrl: './control-flow.component.html',
  styleUrls: ['./control-flow.component.scss']
})
export class ControlFlowComponent {
  examples: WritableSignal<ExampleCard[]> = signal([
    { title: '@if Example 1', content: 'Basic usage of @if block.', routerLink: '/control-flow/example1' },
    { title: '@for Example 1', content: 'Basic usage of @for block.', routerLink: '/control-flow/example2' },
    { title: '@switch Example 1', content: 'Basic usage of @switch block.', routerLink: '/control-flow/example3' }
  ]);

}

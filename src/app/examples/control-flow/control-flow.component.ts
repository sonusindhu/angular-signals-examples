
import { Component, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  imports: [CommonModule, RouterModule, MatCardModule, MatGridListModule, MatIconModule],
  templateUrl: './control-flow.component.html',
  styleUrls: ['./control-flow.component.scss']
})
export class ControlFlowComponent {
  ifExamples: WritableSignal<ExampleCard[]> = signal([
    { title: '@if Example 1', content: 'Basic usage of @if block.', routerLink: '/control-flow/if-section/if-example-1' }
  ]);

  forExamples: WritableSignal<ExampleCard[]> = signal([
    { title: '@for Example 1', content: 'Basic usage of @for block.', routerLink: '/control-flow/for-section/for-example-1' }
  ]);

  switchExamples: WritableSignal<ExampleCard[]> = signal([
    { title: '@switch Example 1', content: 'Basic usage of @switch block.', routerLink: '/control-flow/switch-section/switch-example-1' }
  ]);
}

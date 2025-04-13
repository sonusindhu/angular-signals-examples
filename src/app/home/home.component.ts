import { Component, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

import { EXAMPLES } from '../shared/consts/signal-examples.const';
import { LINKED_SIGNAL_EXAMPLES } from '../shared/consts/linked-signal-examples.const';
import { ExampleModel } from '../shared/models/example.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-home',
    imports: [CommonModule, RouterModule, MatCardModule, MatGridListModule, MatIconModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
  examples: WritableSignal<ExampleModel[]> = signal(EXAMPLES);

  linkedSignalExamples: WritableSignal<ExampleModel[]> = signal(LINKED_SIGNAL_EXAMPLES);
}

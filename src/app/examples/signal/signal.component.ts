import { Component, signal, WritableSignal } from '@angular/core';

import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { ExampleModel } from '../../shared/models/example.model';
import { EXAMPLES } from '../../shared/consts/signal-examples.const';

@Component({
    selector: 'app-signal',
    imports: [RouterModule, MatCardModule, MatGridListModule, MatIconModule],
    templateUrl: './signal.component.html',
    styleUrl: './signal.component.scss'
})
export default class SignalComponent {
    signalExamples: WritableSignal<ExampleModel[]> = signal(EXAMPLES);
}

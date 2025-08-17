import { Component, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { ExampleModel } from '../../shared/models/example.model';
import { LINKED_SIGNAL_EXAMPLES } from '../../shared/consts/linked-signal-examples.const';

@Component({
    selector: 'app-linked-signal',
    imports: [CommonModule, RouterModule, MatCardModule, MatGridListModule, MatIconModule],
    templateUrl: './linked-signal.component.html',
    styleUrl: './linked-signal.component.scss'
})
export default class LinkedSignalComponent {
    linkedSignalExamples: WritableSignal<ExampleModel[]> = signal(LINKED_SIGNAL_EXAMPLES);
}

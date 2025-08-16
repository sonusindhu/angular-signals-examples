import { Component, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { ExampleModel } from '../../shared/models/example.model';
import { DEFER_BLOCK_EXAMPLES } from './example-data/defer-block-examples';

@Component({
    selector: 'app-defer-block',
    imports: [CommonModule, RouterModule, MatCardModule, MatGridListModule, MatIconModule],
    templateUrl: './defer-block.component.html',
    styleUrl: './defer-block.component.scss'
})
export default class DeferBlockComponent {
    deferBlockExamples: WritableSignal<ExampleModel[]> = signal(DEFER_BLOCK_EXAMPLES);
}

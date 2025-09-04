import { Component, signal, WritableSignal } from '@angular/core';

import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { ExampleModel } from 'src/app/shared/models/example.model';
import { ADVANCED_EXAMPLES } from './advanced.const';

@Component({
    selector: 'app-advanced',
    imports: [RouterModule, MatCardModule, MatGridListModule, MatIconModule],
    templateUrl: './advanced.component.html',
    styleUrls: ['./advanced.component.scss']
})
export default class AdvancedComponent {
    examples: WritableSignal<ExampleModel[]> = signal(ADVANCED_EXAMPLES);
}

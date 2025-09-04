import { Component, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { ExampleModel } from 'src/app/shared/models/example.model';
import { SIGNAL_FORM_EXAMPLES } from './signal-forms.const';

@Component({
    selector: 'app-signal-forms',
    imports: [CommonModule, RouterModule, MatCardModule, MatGridListModule, MatIconModule],
    templateUrl: './signal-forms.component.html',
    styleUrls: ['./signal-forms.component.scss']
})
export default class SignalFormsComponent {
    examples: WritableSignal<ExampleModel[]> = signal(SIGNAL_FORM_EXAMPLES);
}

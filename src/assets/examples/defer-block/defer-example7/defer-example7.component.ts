import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
    selector: 'app-defer-example7',
    standalone: true,
    imports: [CommonModule, MatCardModule, MatButtonModule, MatProgressBarModule],
    templateUrl: './defer-example7-md.component.html'
})
export default class DeferExample7Component {
    
}

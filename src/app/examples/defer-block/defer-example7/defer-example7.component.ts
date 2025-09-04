import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MarkdownComponent } from 'ngx-markdown';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-defer-example7',
    imports: [MatCardModule, MatButtonModule, MatTabsModule, MatProgressBarModule, MarkdownComponent, RouterModule],
    templateUrl: './defer-example7.component.html',
    styleUrl: './defer-example7.component.scss'
})
export default class DeferExample7Component {
    
}

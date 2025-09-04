import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MarkdownComponent } from 'ngx-markdown';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-defer-example6',
    imports: [MatCardModule, MatButtonModule, MatTabsModule, MatButtonToggleModule, MarkdownComponent, RouterModule],
    templateUrl: './defer-example6.component.html',
    styleUrl: './defer-example6.component.scss'
})
export default class DeferExample6Component {
    
}

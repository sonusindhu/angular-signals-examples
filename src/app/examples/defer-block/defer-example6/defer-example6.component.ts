import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
    selector: 'app-defer-example6',
    imports: [CommonModule, MatCardModule, MatButtonModule, MatTabsModule, MatButtonToggleModule, MarkdownComponent],
    templateUrl: './defer-example6.component.html',
    styleUrl: './defer-example6.component.scss'
})
export default class DeferExample6Component {
    
}

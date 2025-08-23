import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MarkdownComponent } from 'ngx-markdown';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-defer-example3',
    imports: [CommonModule, MatButtonModule, MatCardModule, MatTabsModule, MarkdownComponent, RouterModule],
    templateUrl: './defer-example3.component.html',
    styleUrl: './defer-example3.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class DeferExample3Component {
  
}

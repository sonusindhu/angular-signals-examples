import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
    selector: 'app-defer-example1',
    imports: [MatButtonModule, MatCardModule, MatTabsModule, MarkdownComponent],
    templateUrl: './defer-example1.component.html',
    styleUrl: './defer-example1.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class DeferExample1Component {
  
}

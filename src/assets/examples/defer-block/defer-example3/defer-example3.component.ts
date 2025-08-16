import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
    selector: 'app-defer-example3',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatCardModule, MatTabsModule],
    templateUrl: './defer-example3-md.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class DeferExample3Component {
  
}

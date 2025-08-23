import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MarkdownComponent } from 'ngx-markdown';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-defer-example2',
    imports: [CommonModule, MatButtonModule, MatCardModule, MatTabsModule, MarkdownComponent, RouterModule],
    templateUrl: './defer-example2.component.html',
    styleUrl: './defer-example2.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class DeferExample2Component {
  clickCount = signal(0);
  
  onButtonClick() {
    this.clickCount.update(count => count + 1);
  }
}

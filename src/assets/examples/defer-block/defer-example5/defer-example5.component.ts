import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
    selector: 'app-defer-example5',
    imports: [MatButtonModule, MatCardModule, MatTabsModule, MatChipsModule, MarkdownComponent],
    templateUrl: './defer-example5.component.html',
    styleUrl: './defer-example5.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class DeferExample5Component {
  manualTrigger = signal(false);
  
  triggerManualLoad() {
    this.manualTrigger.set(true);
  }
  
  resetDemo() {
    this.manualTrigger.set(false);
    // Small delay to allow the reset to take effect
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
}

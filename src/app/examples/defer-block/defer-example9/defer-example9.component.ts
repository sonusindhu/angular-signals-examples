import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MarkdownComponent } from 'ngx-markdown';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-defer-example9',
    standalone: true,
    imports: [MatButtonModule, MatCardModule, MatTabsModule, MatIconModule, MatProgressBarModule, MarkdownComponent, RouterModule],
    templateUrl: './defer-example9.component.html',
    styleUrl: './defer-example9.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class DeferExample9Component {
  shouldFail = signal(true);
  retryCount = signal(0);
  maxRetries = 3;
  
  simulateNetworkError() {
    this.shouldFail.update(current => !current);
    this.retryCount.set(0);
  }
  
  retryLoad() {
    if (this.retryCount() < this.maxRetries) {
      this.retryCount.update(count => count + 1);
      // Simulate retry logic
      if (this.retryCount() >= 2) {
        this.shouldFail.set(false); // Success after 2 retries
      }
    }
    
    // Trigger page reload to reset defer blocks
    setTimeout(() => window.location.reload(), 100);
  }
  
  throwError() {
    if (this.shouldFail()) {
      this.retryCount.update(count => count + 1);
      throw new Error(`Simulated network error (attempt ${this.retryCount()})`);
    }
    return '';
  }
  
  resetDemo() {
    this.shouldFail.set(true);
    this.retryCount.set(0);
    setTimeout(() => window.location.reload(), 100);
  }
}

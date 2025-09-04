import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MarkdownComponent } from 'ngx-markdown';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-defer-example8',
    standalone: true,
    imports: [MatButtonModule, MatCardModule, MatTabsModule, MatIconModule, MatChipsModule, MarkdownComponent, RouterModule],
    templateUrl: './defer-example8-md.component.html',
    styleUrl: './defer-example8.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class DeferExample8Component {
  prefetchStatus = signal<'none' | 'prefetched' | 'loaded'>('none');
  loadTime = signal<number | null>(null);
  
  onPrefetch() {
    if (this.prefetchStatus() === 'none') {
      this.prefetchStatus.set('prefetched');
      console.log('Content prefetched on hover');
    }
  }
  
  onLoad() {
    const startTime = Date.now();
    this.prefetchStatus.set('loaded');
    this.loadTime.set(Date.now() - startTime);
  }
  
  resetDemo() {
    this.prefetchStatus.set('none');
    this.loadTime.set(null);
    // Reload to reset defer blocks
    setTimeout(() => window.location.reload(), 100);
  }
}

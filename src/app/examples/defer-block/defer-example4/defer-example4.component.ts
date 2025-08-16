import { ChangeDetectionStrategy, Component, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
    selector: 'app-defer-example4',
    imports: [CommonModule, MatButtonModule, MatCardModule, MatTabsModule, MarkdownComponent],
    templateUrl: './defer-example4.component.html',
    styleUrl: './defer-example4.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class DeferExample4Component implements OnInit, OnDestroy {
  countdown = signal(3);
  private intervalId?: any;
  
  ngOnInit() {
    this.startCountdown();
  }
  
  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  
  startCountdown() {
    this.countdown.set(3);
    this.intervalId = setInterval(() => {
      const current = this.countdown();
      if (current > 0) {
        this.countdown.set(current - 1);
      } else {
        clearInterval(this.intervalId);
      }
    }, 1000);
  }
  
  restartDemo() {
    // Reset the page to restart the demo
    window.location.reload();
  }
}

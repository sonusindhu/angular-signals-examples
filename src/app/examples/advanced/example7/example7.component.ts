// This component demonstrates how to manually trigger change detection in Angular zoneless mode.
// In zoneless mode, async operations like setInterval do NOT trigger global change detection automatically.
// You must call appRef.tick() manually to run a global change detection cycle.
// The runTickManually() method can be called from the template (e.g., via a button) to trigger a tick and see the log.

import { Component, ApplicationRef, signal, ChangeDetectorRef } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownComponent } from 'ngx-markdown';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-example7',
  imports: [MatTabsModule, MatCardModule, MatIconModule, MarkdownComponent, RouterModule, MatButtonModule],
  templateUrl: './example7.component.html',
  styleUrl: './example7.component.scss'
})
export class Example7Component {
  // In zoneless mode, you must trigger ticks manually for global change detection
  constructor(public appRef: ApplicationRef, private cdr: ChangeDetectorRef) {
    // Override tick to log when global change detection runs
    const originalTick = appRef.tick;
    appRef.tick = function (this: ApplicationRef) {
      console.group('Change detection triggered');
      console.trace(); // 👈 shows the call stack
      console.groupEnd();
      return originalTick.call(this);
    } as any;
  }

  // Call this method to manually trigger a global change detection tick
  runTickManually() {
    this.appRef.tick();
  }
}

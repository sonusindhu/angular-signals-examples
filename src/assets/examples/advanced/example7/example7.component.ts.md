```typescript
import { Component, ApplicationRef } from '@angular/core';

@Component({
  selector: 'app-advanced-example6',
  templateUrl: './advanced-example6.component.html',
  styleUrl: './advanced-example6.component.scss'
})
export class AdvancedExample6Component {
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
```

```typescript
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-switch-example-1',
  standalone: true,
  imports: [CommonModule, FormsModule, MatTabsModule, MatCardModule, MatIconModule, MarkdownComponent],
  templateUrl: './switch-example-1.component.html',
  styleUrls: ['./switch-example-1.component.scss']
})
export class SwitchExample1Component {
  status = signal('pending');

  onStatusChange(eventOrValue: Event | string) {
    if (typeof eventOrValue === 'string') {
      this.status.set(eventOrValue);
    } else {
      const value = (eventOrValue.target instanceof HTMLSelectElement) ? eventOrValue.target.value : 'pending';
      this.status.set(value);
    }
  }
}
```

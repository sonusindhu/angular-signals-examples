```typescript
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownModule } from 'ngx-markdown';
import { ShowOnEvenDirective } from './app-show-on-even.directive';

@Component({
  selector: 'app-advanced-example3',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MarkdownModule,
    ShowOnEvenDirective
  ],
  templateUrl: './advanced-example3.component.html',
  styleUrls: ['./advanced-example3.component.scss']
})
export class AdvancedExample3Component {
  isLoggedIn = signal(false);
  showDialog = signal(false);
  loadContent = signal(false);
  counter = signal(0);
  products = signal([
    { name: 'Laptop', price: 1200 },
    { name: 'Phone', price: 800 },
    { name: 'Tablet', price: 600 }
  ]);

  toggleLogin() {
    this.isLoggedIn.update(v => !v);
  }

  openDialog() {
    this.showDialog.set(true);
  }

  closeDialog() {
    this.showDialog.set(false);
  }

  toggleContent() {
    this.loadContent.update(v => !v);
  }

  incrementCounter() {
    this.counter.update(v => v + 1);
  }
}
```
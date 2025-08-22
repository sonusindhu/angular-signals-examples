import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIf, NgForOf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownComponent } from 'ngx-markdown';
import { ShowOnEvenDirective } from './app-show-on-even.directive';

/**
 * Example 3: Real-World ng-template Use Cases
 *
 * This component demonstrates advanced and practical uses of ng-template in Angular,
 * including conditional rendering, template outlets, context passing, and custom structural directives.
 */
@Component({
  selector: 'app-advanced-example3',
  standalone: true,
  imports: [CommonModule, NgIf, NgForOf, MatButtonModule, MatTabsModule, MatCardModule, MatIconModule, MarkdownComponent, ShowOnEvenDirective],
  templateUrl: './advanced-example3.component.html',
  styleUrl: './advanced-example3.component.scss'
})
export class AdvancedExample3Component {
  // Signal for login state (Conditional Rendering tab)
  isLoggedIn = signal(false);

  // Signal for product list (List Rendering tab)
  products = signal([
    { name: 'Laptop', price: 1200 },
    { name: 'Phone', price: 800 }
  ]);

  // Signal for dialog state (Template Outlet tab)
  showDialog = signal(false);

  // Signal for counter (Custom Directive tab)
  counter = signal(0);

  // Signal for dynamic content (Dynamic Content tab)
  loadContent = signal(false);

  // Methods for toggling state
  toggleLogin() {
    this.isLoggedIn.set(!this.isLoggedIn());
  }

  openDialog() {
    this.showDialog.set(true);
  }

  closeDialog() {
    this.showDialog.set(false);
  }

  incrementCounter() {
    this.counter.set(this.counter() + 1);
  }

  toggleContent() {
    this.loadContent.set(!this.loadContent());
  }
}

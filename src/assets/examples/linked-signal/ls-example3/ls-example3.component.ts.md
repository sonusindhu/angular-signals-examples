```typescript
import { Component, linkedSignal, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MarkdownComponent } from 'ngx-markdown';
import { CommonModule, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-ls-example3',
  imports: [CommonModule, MatSelectModule, MatFormFieldModule, MatInputModule, MatTabsModule, MatCardModule, MarkdownComponent, TitleCasePipe],
  templateUrl: './ls-example3.component.html',
  styleUrl: './ls-example3.component.scss'
})
export class LsExample3Component {
  products = signal([
    { id: 'p001', name: 'Laptop' },
    { id: 'p002', name: 'Phone' },
    { id: 'p003', name: 'Tablet' }
  ]);
  productId = signal('p001');
  userType = signal<'regular' | 'premium'>('regular');
  price = linkedSignal<[string, 'regular' | 'premium'], number>({
    source:() => [this.productId(), this.userType()],
    computation: (source, prev) => {
      const [id, type] = source;
      return this.getPriceFromRules(id, type);
    }
  });
  private getPriceFromRules(productId: string, userType: string): number {
    // Simulate pricing logic
    const basePrice = productId === 'p001' ? 100 : 200;
    return userType === 'premium' ? basePrice * 0.9 : basePrice;
  }
  updateProduct(event: MatSelectChange<any>) {
    this.productId.set(event.value);
  }
  updateUserType(event: MatSelectChange<any>) {
    this.userType.set(event.value as 'regular' | 'premium');
  }
  updateCustomPrice(event: Event){
    const input = event.target as HTMLInputElement;
    if (input.value) {
      this.price.set(+input.value);
    }
  }
  getProductName() {
    return this.products().find(p => p.id === this.productId())?.name || 'Unknown';
  }
  getBasePrice() {
    const prices: Record<string, number> = {
      'p001': 1200, // Laptop
      'p002': 800,  // Phone
      'p003': 600   // Tablet
    };
    return prices[this.productId()] || 500;
  }
  getDiscountText() {
    const discount = this.userType() === 'premium' ? '10% Premium Discount' : 'No Discount';
    return discount;
  }
}
```

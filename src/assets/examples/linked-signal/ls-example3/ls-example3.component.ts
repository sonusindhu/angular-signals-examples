import { Component, linkedSignal, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ls-example3',
  imports: [CommonModule, MatSelectModule, MatFormFieldModule, MatInputModule, MatCardModule],
  template: `<!-- Component template here -->`,
  styles: [`/* Component styles here */`]
})
export class LsExample3Component {
  products = signal([
    { id: 'p001', name: 'Laptop' },
    { id: 'p002', name: 'Phone' },
    { id: 'p003', name: 'Tablet' }
  ]);

  productId = signal('p001');
  userType = signal<'regular' | 'premium'>('regular');

  // 🔗 Advanced LinkedSignal with tuple source and complex computation
  price = linkedSignal<[string, 'regular' | 'premium'], number>({
    source: () => [this.productId(), this.userType()],
    computation: (source, prev) => {
      const [id, type] = source;
      return this.getPriceFromRules(id, type);
    }
  });

  private getPriceFromRules(productId: string, userType: string): number {
    // Base pricing by product
    const basePrices: Record<string, number> = {
      'p001': 1200, // Laptop
      'p002': 800,  // Phone
      'p003': 600   // Tablet
    };
    
    const basePrice = basePrices[productId] || 500;
    
    // Apply user type discount
    return userType === 'premium' ? basePrice * 0.9 : basePrice; // 10% premium discount
  }

  updateProduct(event: MatSelectChange<any>) {
    this.productId.set(event.value);
  }

  updateUserType(event: MatSelectChange<any>) {
    this.userType.set(event.value as 'regular' | 'premium');
  }

  updateCustomPrice(event: Event) {
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
    return this.userType() === 'premium' ? '10% Premium Discount' : 'No Discount';
  }
}

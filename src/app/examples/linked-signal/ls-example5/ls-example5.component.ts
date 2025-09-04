import { Component, signal, linkedSignal, computed } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MarkdownComponent } from 'ngx-markdown';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

interface Product {
  name: string;
  price: number;
  category: string;
}

const PRODUCTS: Product[] = [
  { name: 'Laptop', price: 1200, category: 'Electronics' },
  { name: 'Headphones', price: 150, category: 'Electronics' },
  { name: 'Coffee Maker', price: 80, category: 'Home' },
  { name: 'Sneakers', price: 90, category: 'Fashion' },
  { name: 'T-shirt', price: 25, category: 'Fashion' },
  { name: 'Desk Lamp', price: 40, category: 'Home' },
  { name: 'Smartphone', price: 900, category: 'Electronics' },
  { name: 'Blender', price: 60, category: 'Home' },
  { name: 'Jeans', price: 55, category: 'Fashion' },
  { name: 'Monitor', price: 300, category: 'Electronics' },
  { name: 'Jacket', price: 120, category: 'Fashion' },
  { name: 'Vacuum Cleaner', price: 200, category: 'Home' },
];

@Component({
  selector: 'app-ls-example5',
  templateUrl: './ls-example5.component.html',
  styleUrl: './ls-example5.component.scss',
  standalone: true,
  imports: [
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MarkdownComponent,
    RouterModule,
    MatButtonModule
]
})
export class LsExample5Component {
  categories = Array.from(new Set(PRODUCTS.map(p => p.category)));

  category = signal('');
  minPrice = signal('');
  maxPrice = signal('');

  // Reset page to 1 whenever filters change
  page = linkedSignal({
    source: () => [this.category(), this.minPrice(), this.maxPrice()],
    computation: () => 1
  });

  // Allow manual page change
  setPage(val: number) {
    this.page.set(val);
  }

  setCategory(val: string) {
    this.category.set(val);
  }
  setMinPrice(val: string) {
    this.minPrice.set(val);
  }
  setMaxPrice(val: string) {
    this.maxPrice.set(val);
  }

  get pageSize() { return 4; }

  filteredProducts = computed(() => {
    let filtered = PRODUCTS;
    if (this.category()) {
      filtered = filtered.filter(p => p.category === this.category());
    }
    const min = Number(this.minPrice());
    if (!isNaN(min) && this.minPrice() !== '') {
      filtered = filtered.filter(p => p.price >= min);
    }
    const max = Number(this.maxPrice());
    if (!isNaN(max) && this.maxPrice() !== '') {
      filtered = filtered.filter(p => p.price <= max);
    }
    return filtered;
  });

  totalPages = computed(() => Math.max(1, Math.ceil(this.filteredProducts().length / this.pageSize)));

  pagedProducts = computed(() => {
    const start = (this.page() - 1) * this.pageSize;
    return this.filteredProducts().slice(start, start + this.pageSize);
  });

  prevPage() {
    if (this.page() > 1) this.page.set(this.page() - 1);
  }
  nextPage() {
    if (this.page() < this.totalPages()) this.page.set(this.page() + 1);
  }
}

import { NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

interface Product {
  id: number;
  name: string;
  price: number;
}

const PRODUCTS: Product[] = [
  { id: 1, name: 'Product A', price: 10 },
  { id: 2, name: 'Product B', price: 15 },
  { id: 3, name: 'Product C', price: 20 },
];

@Component({
  selector: 'signal-example13',
  standalone: true,
  templateUrl: `./signal-example13.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, NgFor, NgIf],
  styles: [
    `
      ul {
        li {
          padding: 10px;
        }
      }
    `,
  ],
})
export default class SignalExample13Component {
  // Define a signal for the list of items
  products = signal(PRODUCTS);

  // Define a computed value for the total price
  totalPrice = computed(() => {
    return this.cart().reduce((acc, curr) => acc + curr.price, 0);
  });

  selectProductsIds = computed(() => {
    return this.cart().map((proudct) => proudct.id);
  });

  cart = signal<Product[]>([]);

  removeFromCart(product: Product) {
    this.cart.update((ids) => {
      return ids.filter((i) => i.id !== product.id);
    });
  }

  addToCart(product: Product) {
    this.cart.update((products) => {
      return [...products, product];
    });
  }
}

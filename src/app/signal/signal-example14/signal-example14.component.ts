import { ScrollingModule } from '@angular/cdk/scrolling';
import {
  ChangeDetectionStrategy,
  Component,
  WritableSignal,
  signal,
} from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'signal-example14',
  standalone: true,
  templateUrl: `./signal-example14.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScrollingModule],
  styles: `
      .products{
        height: 300px; 
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .product{
          height: 50px;
          display: flex;
          align-items: center;
        }
      }
      
    `,
})
export default class SignalExample14Component {
  products: WritableSignal<Product[]> = signal(
    Array.from({ length: 1000 }, (_, i) => ({
      id: i + 1,
      name: `Product ${i + 1}`,
      price: Math.floor(Math.random() * 100),
    }))
  );
  
}

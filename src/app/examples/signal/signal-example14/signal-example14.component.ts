import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatTabsModule } from '@angular/material/tabs';
import { MarkdownComponent } from 'ngx-markdown';
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
    templateUrl: `./signal-example14.component.html`,
    styleUrl: `./signal-example14.component.scss`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ScrollingModule, MatTabsModule, MarkdownComponent],
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

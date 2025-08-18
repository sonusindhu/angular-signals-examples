```typescript
import { Component, linkedSignal, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ls-example4',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatCardModule],
  templateUrl: './ls-example4.component.html',
  styleUrl: './ls-example4.component.scss'
})
export class LsExample4Component {
  celsius = signal(0);
  fahrenheit = linkedSignal<number, number>({
    source: () => this.celsius(),
    computation: (c) => Math.round((c * 9/5 + 32) * 100) / 100,
    update: (f) => Math.round(((f - 32) * 5/9) * 100) / 100
  });

  updateCelsius(event: Event) {
    const input = event.target as HTMLInputElement;
    this.celsius.set(+input.value);
  }
  updateFahrenheit(event: Event) {
    const input = event.target as HTMLInputElement;
    this.fahrenheit.set(+input.value);
  }
}
```

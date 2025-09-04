import { Component, signal, linkedSignal } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MarkdownComponent } from 'ngx-markdown';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-ls-example4',
  templateUrl: './ls-example4.component.html',
  styleUrl: './ls-example4.component.scss',
  imports: [
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MarkdownComponent,
    RouterModule,
    MatButtonModule
]
})
export class LsExample4Component {
  // Unit Converter: Celsius <-> Fahrenheit using linkedSignal
  celsius = signal(0);

  fahrenheit = linkedSignal({
    source: () => this.celsius(),
    computation: (c) => Math.round((c * 9/5 + 32) * 100) / 100
  });

  setCelsius(val: string) {
    this.celsius.set(Number(val));
  }

  setFahrenheit(val: string) {
    // To update celsius from fahrenheit, set celsius directly
    this.celsius.set(Math.round(((Number(val) - 32) * 5/9) * 100) / 100);
  }

  // Helper for template: convert fahrenheit to celsius
  get fahrenheitToCelsius(): number {
    return Math.round(((this.fahrenheit() - 32) * 5/9) * 100) / 100;
  }
}

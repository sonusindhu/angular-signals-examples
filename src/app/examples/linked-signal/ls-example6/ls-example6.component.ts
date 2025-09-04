import { Component, signal, linkedSignal, computed } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MarkdownComponent } from 'ngx-markdown';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

interface Country {
  code: string;
  name: string;
  currency: string;
}

const COUNTRIES: Country[] = [
  { code: 'US', name: 'United States', currency: 'USD' },
  { code: 'IN', name: 'India', currency: 'INR' },
  { code: 'GB', name: 'United Kingdom', currency: 'GBP' },
  { code: 'JP', name: 'Japan', currency: 'JPY' },
  { code: 'DE', name: 'Germany', currency: 'EUR' },
  { code: 'FR', name: 'France', currency: 'EUR' },
  { code: 'AU', name: 'Australia', currency: 'AUD' },
];

const ALL_CURRENCIES = Array.from(new Set(COUNTRIES.map(c => c.currency)));

@Component({
  selector: 'app-ls-example6',
  templateUrl: './ls-example6.component.html',
  styleUrl: './ls-example6.component.scss',
  standalone: true,
  imports: [
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MarkdownComponent,
    RouterModule,
    MatButtonModule
]
})
export class LsExample6Component {
  countries = COUNTRIES;
  availableCurrencies = ALL_CURRENCIES;

  country = signal('US');
  // This signal will be set to the default currency for the country, unless overridden
  currency = linkedSignal({
    source: () => this.country(),
    computation: (countryCode) => {
      const found = COUNTRIES.find(c => c.code === countryCode);
      return found ? found.currency : '';
    }
  });

  setCountry(val: string) {
    this.country.set(val);
    // When country changes, currency resets to default (linkedSignal does this automatically)
  }

  setCurrency(val: string) {
    this.currency.set(val); // Manual override
  }
}

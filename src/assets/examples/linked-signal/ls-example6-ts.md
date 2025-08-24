```typescript
import { Component, signal, linkedSignal } from '@angular/core';

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
  // ...
})
export class LsExample6Component {
  countries = COUNTRIES;
  availableCurrencies = ALL_CURRENCIES;

  country = signal('US');
  currency = linkedSignal({
    source: () => this.country(),
    computation: (countryCode) => {
      const found = COUNTRIES.find(c => c.code === countryCode);
      return found ? found.currency : '';
    }
  });

  setCountry(val: string) {
    this.country.set(val);
  }

  setCurrency(val: string) {
    this.currency.set(val);
  }
}
```

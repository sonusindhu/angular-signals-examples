# Advanced Example 8: Two-way Currency Converter

This example demonstrates a two-way currency converter using Angular signals and the setter pattern.

- Enter an amount in either USD ($) or EUR (€) input.
- The other input updates automatically using a live conversion rate (USD ↔ EUR).
- Both inputs are two-way bound using signals and setter functions.

**Key code:**
```typescript
const USD_TO_EUR = 0.92;
const EUR_TO_USD = 1 / USD_TO_EUR;

setDollar(val: number) {
  if (!isNaN(val)) {
    this._dollar.set(val);
    this._euro.set(Number((val * USD_TO_EUR).toFixed(2)));
  }
}

setEuro(val: number) {
  if (!isNaN(val)) {
    this._euro.set(val);
    this._dollar.set(Number((val * EUR_TO_USD).toFixed(2)));
  }
}
```

**Template usage:**
```html
<input type="number" [value]="dollar()" (input)="setDollar($any($event.target).valueAsNumber)" />
<input type="number" [value]="euro()" (input)="setEuro($any($event.target).valueAsNumber)" />
```

The full code for this example is available in the HTML, TS, and SCSS tabs above.

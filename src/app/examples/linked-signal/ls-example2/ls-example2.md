# LinkedSignal Example 2: Total Price Calculator

## Overview
This example demonstrates a real-time **total price calculator** using Angular's linkedSignal. It automatically calculates the total price including tax whenever the base price or quantity changes, showcasing reactive mathematical computations.

## Key Features
- **Real-time Calculation**: Total updates instantly when inputs change
- **Tax Calculation**: Automatic tax application (18% tax rate)
- **Model Integration**: Uses Angular's model() for two-way binding
- **Mathematical Operations**: Demonstrates arithmetic in reactive context

## LinkedSignal Implementation

```typescript
export class LsExample2Component {
  basePrice = model(100);
  quantity = model(1);
  taxRate = 0.18; // 18% tax

  // ✅ Will automatically update on dependency changes
  totalPrice = linkedSignal(() => {
    const subtotal = this.basePrice() * this.quantity();
    return subtotal * (1 + this.taxRate);
  });
}
```

## How It Works

### 1. **Simplified Syntax**
LinkedSignal can use simplified syntax when you only need computation:
```typescript
totalPrice = linkedSignal(() => {
  const subtotal = this.basePrice() * this.quantity();
  return subtotal * (1 + this.taxRate);
});
```

### 2. **Automatic Dependency Tracking**
The linkedSignal automatically tracks dependencies:
- `this.basePrice()` - tracks base price changes
- `this.quantity()` - tracks quantity changes
- Recalculates whenever either changes

### 3. **Mathematical Formula**
```
Subtotal = Base Price × Quantity
Total Price = Subtotal × (1 + Tax Rate)
```

## Real-World Applications
- **E-commerce Checkout**: Calculate order totals with tax
- **Invoice Generation**: Dynamic pricing calculations
- **Shopping Carts**: Real-time total updates
- **Financial Calculators**: Interest, loan, or investment calculations
- **Subscription Pricing**: Tiered pricing with discounts

## Template Integration
```html
<div class="calculator">
  <mat-form-field>
    <mat-label>Base Price ($)</mat-label>
    <input matInput type="number" [(ngModel)]="basePrice" min="0">
  </mat-form-field>

  <mat-form-field>
    <mat-label>Quantity</mat-label>
    <input matInput type="number" [(ngModel)]="quantity" min="1">
  </mat-form-field>

  <div class="calculation-breakdown">
    <p>Subtotal: ${{(basePrice() * quantity()).toFixed(2)}}</p>
    <p>Tax ({{(taxRate * 100)}}%): ${{(basePrice() * quantity() * taxRate).toFixed(2)}}</p>
    <p><strong>Total: ${{totalPrice().toFixed(2)}}</strong></p>
  </div>
</div>
```

## Benefits Over Traditional Approaches

### ❌ Without LinkedSignal (Manual Approach)
```typescript
// Manual calculation with effects
export class ManualCalculator {
  basePrice = signal(100);
  quantity = signal(1);
  totalPrice = signal(0);

  constructor() {
    // Need to manually manage updates
    effect(() => {
      const subtotal = this.basePrice() * this.quantity();
      this.totalPrice.set(subtotal * 1.18);
    });
  }
}
```

### ✅ With LinkedSignal (Reactive Approach)
```typescript
// Clean, declarative calculation
export class LinkedCalculator {
  basePrice = model(100);
  quantity = model(1);
  
  totalPrice = linkedSignal(() => {
    const subtotal = this.basePrice() * this.quantity();
    return subtotal * 1.18;
  });
}
```

## Advanced Features
- **Precision Handling**: Use `.toFixed(2)` for currency display
- **Validation**: Add min/max constraints to inputs
- **Multiple Tax Rates**: Extend for different tax jurisdictions
- **Discounts**: Add discount calculations to the formula

## Performance Benefits
- ✅ **Memoization**: Only recalculates when dependencies change
- ✅ **Efficient Updates**: No unnecessary computations
- ✅ **Automatic Cleanup**: No manual subscription management
- ✅ **Type Safety**: Full TypeScript support

## Learning Points
- LinkedSignal provides a clean way to create computed values
- Perfect for mathematical calculations that depend on multiple inputs
- Maintains reactivity without complex effect management
- Model() integration enables seamless two-way binding
- Ideal for financial and mathematical applications

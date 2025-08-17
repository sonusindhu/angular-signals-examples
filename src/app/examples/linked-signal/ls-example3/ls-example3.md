# LinkedSignal Example 3: Dynamic Pricing Engine

## Overview
This advanced example demonstrates a **dynamic pricing engine** using Angular's linkedSignal with complex business logic. It calculates prices based on multiple factors: product type and user tier, showcasing how linkedSignal can handle sophisticated multi-dimensional computations.

## Key Features
- **Multi-Factor Pricing**: Price depends on both product and user type
- **Business Logic Integration**: Complex pricing rules and calculations
- **Manual Override**: Ability to set custom prices that override calculations
- **Type Safety**: Strong typing for source parameters
- **Real-world Patterns**: Mirrors actual e-commerce pricing systems

## LinkedSignal Implementation

```typescript
export class LsExample3Component {
  products = signal([
    { id: 'p001', name: 'Laptop' },
    { id: 'p002', name: 'Phone' },
    { id: 'p003', name: 'Tablet' }
  ]);

  productId = signal('p001');
  userType = signal<'regular' | 'premium'>('regular');

  // Advanced linkedSignal with tuple source and complex computation
  price = linkedSignal<[string, 'regular' | 'premium'], number>({
    source: () => [this.productId(), this.userType()],
    computation: (source, prev) => {
      const [id, type] = source;
      return this.getPriceFromRules(id, type);
    }
  });

  private getPriceFromRules(productId: string, userType: string): number {
    // Complex business logic
    const basePrice = productId === 'p001' ? 100 : 200;
    return userType === 'premium' ? basePrice * 0.9 : basePrice; // 10% premium discount
  }
}
```

## Advanced LinkedSignal Features

### 1. **Tuple Source Pattern**
```typescript
// Multiple dependencies as tuple
source: () => [this.productId(), this.userType()]
```

### 2. **Type Safety with Generics**
```typescript
linkedSignal<[string, 'regular' | 'premium'], number>
```
- **Source Type**: `[string, 'regular' | 'premium']` (tuple of product ID and user type)
- **Return Type**: `number` (the calculated price)

### 3. **Destructuring in Computation**
```typescript
computation: (source, prev) => {
  const [id, type] = source; // Destructure the tuple
  return this.getPriceFromRules(id, type);
}
```

## Business Logic Implementation

### **Pricing Rules Engine**
```typescript
private getPriceFromRules(productId: string, userType: string): number {
  // Base pricing by product
  const basePrices = {
    'p001': 1200, // Laptop
    'p002': 800,  // Phone  
    'p003': 600   // Tablet
  };
  
  const basePrice = basePrices[productId] || 500;
  
  // User tier discounts
  const discounts = {
    'regular': 1.0,    // No discount
    'premium': 0.9,    // 10% discount
    'enterprise': 0.8  // 20% discount
  };
  
  return basePrice * (discounts[userType] || 1.0);
}
```

## Manual Override Feature

### **Custom Price Setting**
```typescript
updateCustomPrice(event: Event) {
  const input = event.target as HTMLInputElement;
  this.price.set(+input.value); // Manual override
}
```

This allows users to set custom prices that override the computed values, demonstrating linkedSignal's flexibility.

## Template Implementation

```html
<div class="pricing-engine">
  <!-- Product Selection -->
  <mat-form-field>
    <mat-label>Select Product</mat-label>
    <mat-select [value]="productId()" (selectionChange)="updateProduct($event)">
      <mat-option [value]="product.id" *ngFor="let product of products()">
        {{product.name}}
      </mat-option>
    </mat-select>
  </mat-form-field>

  <!-- User Type Selection -->
  <mat-form-field>
    <mat-label>User Type</mat-label>
    <mat-select [value]="userType()" (selectionChange)="updateUserType($event)">
      <mat-option value="regular">Regular Customer</mat-option>
      <mat-option value="premium">Premium Customer</mat-option>
    </mat-select>
  </mat-form-field>

  <!-- Calculated Price Display -->
  <div class="price-display">
    <h3>Calculated Price: ${{price()}}</h3>
  </div>

  <!-- Manual Price Override -->
  <mat-form-field>
    <mat-label>Custom Price Override</mat-label>
    <input matInput type="number" (input)="updateCustomPrice($event)">
  </mat-form-field>
</div>
```

## Real-World Applications

### **E-commerce Platforms**
- Dynamic pricing based on customer segments
- Product category-specific pricing rules
- Bulk discount calculations
- Seasonal pricing adjustments

### **SaaS Pricing**
- Feature-based pricing tiers
- Usage-based billing calculations
- Enterprise vs individual pricing
- Geographic pricing variations

### **Financial Services**
- Risk-based pricing models
- Credit score-dependent rates
- Product complexity pricing
- Customer loyalty discounts

## Advanced Patterns

### **1. Multi-Level Discounts**
```typescript
private calculateComplexPricing(productId: string, userType: string, quantity: number): number {
  let basePrice = this.getBasePrice(productId);
  
  // User tier discount
  basePrice *= this.getUserDiscount(userType);
  
  // Quantity discount
  basePrice *= this.getQuantityDiscount(quantity);
  
  // Seasonal adjustments
  basePrice *= this.getSeasonalMultiplier();
  
  return Math.round(basePrice * 100) / 100; // Round to cents
}
```

### **2. Validation and Constraints**
```typescript
computation: (source, prev) => {
  const [id, type] = source;
  const calculatedPrice = this.getPriceFromRules(id, type);
  
  // Apply business constraints
  const minPrice = 50;
  const maxPrice = 5000;
  
  return Math.max(minPrice, Math.min(maxPrice, calculatedPrice));
}
```

## Performance Considerations
- ✅ **Memoization**: Calculations only run when dependencies change
- ✅ **Efficient Lookups**: Use Maps for large product catalogs
- ✅ **Debouncing**: Consider debouncing for expensive calculations
- ✅ **Caching**: Cache complex business rule results

## Learning Points
- LinkedSignal excels at multi-factor computations
- Tuple sources enable tracking multiple dependencies
- Type safety prevents runtime errors in complex calculations
- Manual overrides provide flexibility when needed
- Perfect for implementing sophisticated business logic
- Ideal pattern for pricing engines, calculators, and dynamic configurations

# LinkedSignal Example 1: Default Course Quantity

## Overview
This example demonstrates how to use Angular's **linkedSignal** to automatically update a quantity field based on the selected course's default quantity. It showcases reactive state management where the quantity automatically resets to the course's default value when a different course is selected.

## Key Features
- **Reactive Updates**: Quantity automatically updates when course selection changes
- **Default Values**: Each course has its own default quantity
- **Source Tracking**: LinkedSignal tracks the selectedCourseId as a source
- **Computation Logic**: Finds the matching course and returns its default quantity

## LinkedSignal Implementation

```typescript
quantity = linkedSignal({
  source: () => ({ selectedCourseId: this.selectedCourseId }),
  computation: (source, previous) => {
    const course = this.courses().find(c => c.id == source.selectedCourseId());
    if(course){
      return this.courses().find(c => c.id === source.selectedCourseId())?.defaultQuantity;
    }
    return this.courses()[0].defaultQuantity;
  }
});
```

## How It Works

### 1. **Source Definition**
The `source` function defines what the linkedSignal should track:
```typescript
source: () => ({ selectedCourseId: this.selectedCourseId })
```

### 2. **Computation Logic**
When the source changes, the computation function runs:
```typescript
computation: (source, previous) => {
  const course = this.courses().find(c => c.id == source.selectedCourseId());
  if(course){
    return course.defaultQuantity;
  }
  return this.courses()[0].defaultQuantity;
}
```

### 3. **Data Structure**
```typescript
interface Course {
  id: number;
  title: string;
  defaultQuantity: number;
}

const COURSES: Course[] = [
  { id: 1, title: "Angular for Beginners", defaultQuantity: 10 },
  { id: 2, title: "Angular Signals In Depth", defaultQuantity: 20 },
  { id: 3, title: "Angular SSR In Depth", defaultQuantity: 30 }
];
```

## Use Cases
- **E-commerce**: Default quantities for different product categories
- **Form Management**: Auto-filling related fields based on selections
- **Configuration**: Setting defaults based on user choices
- **Inventory Management**: Default order quantities for different items

## Benefits of LinkedSignal
- ✅ **Automatic Updates**: No manual subscription management
- ✅ **Reactive**: Changes propagate automatically
- ✅ **Performance**: Only recomputes when dependencies change
- ✅ **Clean Code**: Declarative approach to derived state

## Template Usage
```html
<mat-form-field>
  <mat-label>Select Course</mat-label>
  <mat-select [(ngModel)]="selectedCourseId">
    <mat-option [value]="course.id" *ngFor="let course of courses()">
      {{course.title}}
    </mat-option>
  </mat-select>
</mat-form-field>

<mat-form-field>
  <mat-label>Quantity</mat-label>
  <input matInput type="number" [(ngModel)]="quantity">
</mat-form-field>
```

## Learning Points
- LinkedSignal creates computed values that update when their sources change
- Perfect for scenarios where one field should auto-update based on another
- Cleaner alternative to manual effect() management for derived state
- Maintains reactivity without complex subscription handling

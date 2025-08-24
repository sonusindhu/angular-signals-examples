```html
<div class="filters-section">
  <mat-form-field appearance="fill">
    <mat-label>Category</mat-label>
    <mat-select [value]="category()" (selectionChange)="setCategory($event.value)">
      <mat-option value="">All</mat-option>
      <mat-option *ngFor="let cat of categories" [value]="cat">{{cat}}</mat-option>
    </mat-select>
  </mat-form-field>
  <mat-form-field appearance="fill">
    <mat-label>Min Price</mat-label>
    <input matInput type="number" [value]="minPrice()" (input)="setMinPrice($any($event.target).value)" />
  </mat-form-field>
  <mat-form-field appearance="fill">
    <mat-label>Max Price</mat-label>
    <input matInput type="number" [value]="maxPrice()" (input)="setMaxPrice($any($event.target).value)" />
  </mat-form-field>
</div>
<div class="products-list">
  <div *ngFor="let product of pagedProducts()" class="product-card">
    <h4>{{product.name}}</h4>
    <div class="price">${{product.price}}</div>
    <div class="category">Category: {{product.category}}</div>
  </div>
</div>
<div class="pagination-section">
  <button mat-stroked-button color="primary" (click)="prevPage()" [disabled]="page() === 1">Prev</button>
  <span class="page-info">Page {{page()}} of {{totalPages()}}</span>
  <button mat-stroked-button color="primary" (click)="nextPage()" [disabled]="page() === totalPages()">Next</button>
</div>
```

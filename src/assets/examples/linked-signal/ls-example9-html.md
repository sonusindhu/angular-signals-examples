```html
<div class="cart-section">
  <div class="form-row">
    <button mat-stroked-button color="accent" (click)="removeSelectedAddress()" [disabled]="addresses().length === 0">Remove Selected Address</button>
    <button mat-stroked-button color="primary" (click)="addRandomAddress()">Add Random Address</button>
  </div>
  <div class="address-list">
    <div *ngFor="let addr of addresses(); let i = index" class="address-item" [class.selected]="selectedAddress() === addr.id" (click)="selectAddress(addr.id)">
      <mat-icon *ngIf="selectedAddress() === addr.id" color="primary">check_circle</mat-icon>
      <span>{{addr.label}}</span>
    </div>
  </div>
</div>
```

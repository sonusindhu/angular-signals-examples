```html
<div class="demo-section">
  <mat-card>
    <mat-card-content>
      <div class="controls">
        <label>
          Number of items:
          <input type="number" [value]="count()" (input)="onCountInput($event)" min="1" max="10" />
        </label>
      </div>
      @for (item of items; track item; let index = $index) {
        <div class="list-item">Item {{ index + 1 }}</div>
      }
    </mat-card-content>
  </mat-card>
</div>
```

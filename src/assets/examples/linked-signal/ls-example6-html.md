```html
<div class="form-section">
  <div class="form-row">
    <mat-form-field appearance="fill">
      <mat-label>Country</mat-label>
      <mat-select [value]="country()" (selectionChange)="setCountry($event.value)">
        <mat-option *ngFor="let c of countries" [value]="c.code">{{c.name}}</mat-option>
      </mat-select>
    </mat-form-field>
    <mat-form-field appearance="fill">
      <mat-label>Currency</mat-label>
      <mat-select [value]="currency()" (selectionChange)="setCurrency($event.value)">
        <mat-option *ngFor="let cur of availableCurrencies" [value]="cur">{{cur}}</mat-option>
      </mat-select>
    </mat-form-field>
  </div>
</div>
```

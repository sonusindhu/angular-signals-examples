```html
<div class="dashboard-section">
  <div class="form-row">
    <mat-form-field appearance="fill">
      <mat-label>Data Source</mat-label>
      <mat-select [value]="dataSource()" (selectionChange)="setDataSource($event.value)">
        <mat-option *ngFor="let src of dataSources" [value]="src.key">{{src.label}}</mat-option>
      </mat-select>
    </mat-form-field>
    <div class="date-range">
      <mat-form-field appearance="fill">
        <mat-label>Start Date</mat-label>
        <input matInput [value]="dateRange().start" type="date" (change)="setStartDate($any($event.target).value)" />
      </mat-form-field>
      <span>to</span>
      <mat-form-field appearance="fill">
        <mat-label>End Date</mat-label>
        <input matInput [value]="dateRange().end" type="date" (change)="setEndDate($any($event.target).value)" />
      </mat-form-field>
    </div>
  </div>
</div>
```

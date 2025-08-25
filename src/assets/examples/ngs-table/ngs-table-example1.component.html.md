```html
<div class="content-area">
  <h2>ngs-table Example 1: Simple Table</h2>
  <p>This example demonstrates a basic usage of ngs-table with selection and column chooser.</p>
  <mat-tab-group>
    <mat-tab label="Demo">
      <div class="demo-section">
        <ngs-table
          [columnsConfig]="columnsConfig"
          [data]="data"
          [showSelection]="true"
          [showColumnChooser]="true"
        ></ngs-table>
      </div>
    </mat-tab>
  </mat-tab-group>
</div>
```

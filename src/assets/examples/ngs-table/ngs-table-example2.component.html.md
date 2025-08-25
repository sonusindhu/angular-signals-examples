```html
<div class="example-container">
  <!-- ...navigation and tabs... -->
  <mat-tab-group mat-stretch-tabs>
    <mat-tab label="Demo">
      <div class="content-area">
        <!-- ...heading and description... -->
        <div class="demo-section w-full">
          <ngs-table
            [columnsConfig]="columnsConfig"
            [data]="data"
            [showSelection]="true"
            [showColumnChooser]="true"
            [enableSorting]="true"
          >
            <ng-template #actionsTpl let-row>
              <button mat-icon-button color="primary" (click)="editRow(row)"><mat-icon>edit</mat-icon></button>
              <button mat-icon-button color="warn" (click)="deleteRow(row)"><mat-icon>delete</mat-icon></button>
            </ng-template>
          </ngs-table>
        </div>
      </div>
    </mat-tab>
    <!-- ...other tabs... -->
  </mat-tab-group>
</div>
```

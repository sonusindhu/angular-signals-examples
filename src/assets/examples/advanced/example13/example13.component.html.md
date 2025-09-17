```html
<div class="demo-section">
  <h3 class="text-lg font-semibold mb-2">Basic Usage</h3>
  <mat-card class="p-4 bg-white rounded-lg shadow">
    <mat-card-content>
      <div class="controls flex flex-col gap-6">
        <div class="border-b pb-4 mb-4">
          <p class="font-medium mb-2">Reactive Form</p>
          <form [formGroup]="toggleControl" class="flex items-center gap-4">
            <div>
              <label for="toggle" class="mr-2 font-semibold">Toggle:</label>
              <app-toggle formControlName="toggle" [isDisabled]="reactiveDisabled" class="mx-2"></app-toggle>
            </div>
            <div class="ml-4 text-sm text-gray-600">
              <p>Current Value: {{ toggleControl.value | json }}</p>
            </div>
            <button type="button" class="ml-4 px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text-sm font-medium" (click)="toggleReactiveDisabled()">
              {{ reactiveDisabled ? 'Enable' : 'Disable' }} Toggle
            </button>
          </form>
        </div>
        <div>
          <p class="font-medium mb-2">Toggle with ngModel</p>
          <div class="flex items-center gap-4">
            <div>
              <label for="toggle" class="mr-2 font-semibold">Toggle:</label>
              <app-toggle [(ngModel)]="toggleModel" [isDisabled]="ngModelDisabled" class="mx-2"></app-toggle>
            </div>
            <div class="ml-4 text-sm text-gray-600">
              <p>Current Value: {{ toggleModel }}</p>
            </div>
            <button type="button" class="ml-4 px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text-sm font-medium" (click)="toggleNgModelDisabled()">
              {{ ngModelDisabled ? 'Enable' : 'Disable' }} Toggle
            </button>
          </div>
        </div>
      </div>
    </mat-card-content>
  </mat-card>
</div>
```

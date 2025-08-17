```code
<div class="demo-section">
<h3>Basic Resource Usage</h3>
<mat-card>
    <mat-card-content>
    
    <div class="controls">
        <mat-form-field>
        <mat-label>Select Course</mat-label>
        <mat-select [(ngModel)]="selectedCourseId" name="course">
            <mat-option>Clear</mat-option>
            @for (course of courses(); track course.id) {
            <mat-option [value]="course.id">{{ course.title }}</mat-option>
            }
        </mat-select>
        </mat-form-field>
        <mat-form-field class="example-full-width">
        <mat-label>Quantity (Auto-updates based on course)</mat-label>
        <input matInput placeholder="Enter custom quantity" [value]="quantity()" (change)="onQuantityChanged(input.value)" #input>
        </mat-form-field>
    </div>
    <div class="info-section">
        <h4>🔗 LinkedSignal in Action</h4>
        <p><strong>Selected Course:</strong> {{getSelectedCourseTitle()}}</p>
        <p><strong>Default Quantity:</strong> {{getSelectedCourseDefaultQuantity()}}</p>
        <p><strong>Current Quantity:</strong> {{quantity()}}</p>
        <p class="note">💡 Notice how the quantity automatically updates when you change the course selection!</p>
    </div>

    </mat-card-content>
</mat-card>

<h3>Key Features</h3>
<mat-card>
    <mat-card-content>
    <ul>
        <li><strong>Automatic Loading States:</strong> Built-in loading and error handling</li>
        <li><strong>Reactive Updates:</strong> Automatically refetches when parameters change</li>
        <li><strong>Type Safety:</strong> Full TypeScript support with proper typing</li>
        <li><strong>Simple API:</strong> Easy to use with minimal boilerplate</li>
    </ul>
    </mat-card-content>
</mat-card>
</div>
```

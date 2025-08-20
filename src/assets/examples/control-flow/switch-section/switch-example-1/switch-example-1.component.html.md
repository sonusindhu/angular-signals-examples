```html
<div class="demo-section">
  <mat-card>
    <mat-card-content>
      <div class="controls">
        <label>
          Select status:
          <select [value]="status()" (change)="onStatusChange($event)">
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </label>
        <button mat-stroked-button (click)="onStatusChange('pending')" style="margin-left:1rem;">Reset</button>
      </div>
      @switch (status()) {
        @case ('pending') {
          <div class="status">⏳ Waiting for approval...</div>
        }
        @case ('approved') {
          <div class="status">✅ Approved!</div>
        }
        @case ('rejected') {
          <div class="status">❌ Rejected.</div>
        }
      }
    </mat-card-content>
  </mat-card>
</div>
```

```code
<div class="demo-section">
  <mat-card>
    <mat-card-content>
      <div class="controls">
        <label>
          <input type="checkbox" [checked]="show()" (change)="onToggle($event)" />
          Show secret message
        </label>
      </div>
      @if (show()) {
        <div class="result">
          🎉 The message is visible!
        </div>
      }
    </mat-card-content>
  </mat-card>
</div>
```

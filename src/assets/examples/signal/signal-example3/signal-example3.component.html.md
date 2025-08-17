```code
<div class="content-area">
  <h2>Signal Example 3 - Name Input</h2>
  <p>This example demonstrates a simple reactive name input using Angular signals.</p>
  <div class="demo-section">
    <div class="counter-container">
      <h3>📝 Name Input</h3>
      <div class="controls">
        <mat-form-field appearance="fill">
          <mat-label>Enter your name</mat-label>
          <input matInput [value]="name()" (input)="updateName(($event.target as HTMLInputElement).value)">
        </mat-form-field>
      </div>
      <div class="info-section">
        <p>Hello, <strong>{{ name() }}</strong>!</p>
        <p>The input updates the signal value in real time.</p>
      </div>
    </div>
  </div>
</div>

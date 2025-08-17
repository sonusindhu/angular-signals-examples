```code
<div class="content-area">
  <h2>Signal Example 1 - Counter</h2>
  <p>This example demonstrates a simple counter using Angular signals with increment and decrement functionality.</p>
  <div class="demo-section">
    <div class="counter-container">
      <h3>🔢 Signal Counter</h3>
      <div class="controls">
        <button mat-raised-button color="primary" (click)="decreaseCount()">-</button>
        <span class="count">{{ count() }}</span>
        <button mat-raised-button color="primary" (click)="increaseCount()">+</button>
      </div>
      <div class="info-section">
        <p>Current value: <strong>{{ count() }}</strong></p>
        <p>The counter uses Angular's signal for reactive state updates.</p>
      </div>
    </div>
  </div>
</div>

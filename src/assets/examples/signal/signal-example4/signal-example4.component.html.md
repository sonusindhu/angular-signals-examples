```code
<h2>Example 4 - computed</h2>
<button mat-raised-button color="primary"  (click)="increaseCount()">Increase</button>
<p>
  count -> {{ count() }}
</p>
<div class="content-area">
  <h2>Signal Example 4 - Computed</h2>
  <p>This example demonstrates a computed signal that derives its value from another signal.</p>
  <div class="demo-section">
    <div class="counter-container">
      <h3>🧮 Computed Signal</h3>
      <div class="controls">
        <button mat-raised-button color="primary" (click)="increaseCount()">Increase</button>
      </div>
      <div class="info-section">
        <p>Count: <strong>{{ count() }}</strong></p>
        <p>Computed count = {{ count() }} + 2 → <strong>{{ doubleCount() }}</strong></p>
      </div>
    </div>
  </div>
</div>

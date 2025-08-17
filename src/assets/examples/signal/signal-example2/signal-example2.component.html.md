```code
<div class="content-area">
    <h2>Signal Example 2 - Auto Increment Counter</h2>
    <p>This example demonstrates a counter that automatically increments every second using Angular signals.</p>
    <div class="demo-section">
      <div class="counter-container">
        <h3>⏱️ Auto-Increment Counter</h3>
        <div class="controls">
          <span class="count">{{ count() }}</span>
        </div>
        <div class="info-section">
          <p>Current value: <strong>{{ count() }}</strong></p>
          <p>The counter increases by 1 every second using a signal and setInterval.</p>
        </div>
      </div>
    </div>
  </div>

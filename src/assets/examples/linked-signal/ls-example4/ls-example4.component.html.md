```code
<div class="content-area">
  <h2>Example 4 - Unit Converter (Celsius  Fahrenheit)</h2>
  <p>This example demonstrates a real-world two-way linkedSignal for converting temperatures between Celsius and Fahrenheit. Changing either value updates the other automatically.</p>
  <div class="demo-section">
    <div class="unit-converter-card">
      <h3> Unit Converter</h3>
      <div class="converter-controls">
        <mat-form-field appearance="fill">
          <mat-label>Celsius (C)</mat-label>
          <input matInput type="number" [value]="celsius()" (input)="updateCelsius($event)">
        </mat-form-field>
        <mat-form-field appearance="fill">
          <mat-label>Fahrenheit (F)</mat-label>
          <input matInput type="number" [value]="fahrenheit()" (input)="updateFahrenheit($event)">
        </mat-form-field>
      </div>
      <mat-card>
        <mat-card-content>
          <h4> Conversion Details</h4>
          <div class="conversion-info">
            <p><strong>Celsius:</strong> {{celsius()}} C</p>
            <p><strong>Fahrenheit:</strong> {{fahrenheit()}} F</p>
          </div>
          <p class="note"> LinkedSignal keeps both units in sync automatically!</p>
        </mat-card-content>
      </mat-card>
    </div>
  </div>
</div>
```

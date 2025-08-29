```html
    <div class="demo-section">
    
        <div>
            <label for="usdInput">Amount in USD ($):</label>
            <input id="usdInput" type="number" min="0" step="0.01" [value]="dollar()" (input)="setDollar($any($event.target).valueAsNumber)" />
        </div>
        <div>
            <label for="eurInput">Amount in EUR (€):</label>
            <input id="eurInput" type="number" min="0" step="0.01" [value]="euro()" (input)="setEuro($any($event.target).valueAsNumber)" />
        </div>
        <p class="mt-2">Current: <b>{{ dollar() | number:'1.2-2' }} $</b> = <b>{{ euro() | number:'1.2-2' }} €</b></p>
        <p class="mt-2 text-sm text-gray-600">
            Both inputs are two-way bound and update each other using signals.<br />
            <code>&lt;input [value]="dollar()" (input)="setDollar($any($event.target).value)" /&gt;</code><br />
            <code>&lt;input [value]="euro()" (input)="setEuro($any($event.target).value)" /&gt;</code>
        </p>
</div>
```

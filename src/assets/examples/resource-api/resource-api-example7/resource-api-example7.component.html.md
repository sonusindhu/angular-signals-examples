```code
<div class="demo-section">
    <h3>Demo Content</h3>
    <mat-card>
        <mat-card-content>
        <div class="demo-actions">
            <mat-form-field appearance="fill">
            <mat-label>Select City</mat-label>
            <mat-select [value]="city()" (selectionChange)="updateCity($event)">
                <ng-container *ngFor="let c of cities(); let i = index">
                <mat-option [value]="c">{{c}}</mat-option>
                </ng-container>
            </mat-select>
            </mat-form-field>
        </div>
        <div class="weather-display" *ngIf="weatherResource.value() as weather">
            <mat-card class="weather-card">
            <mat-card-header>
                <mat-card-title>
                <mat-icon>cloud</mat-icon>
                Weather Details
                </mat-card-title>
            </mat-card-header>
            <mat-card-content>
                <p class="weather-text"><strong>City:</strong> {{city()}}</p>
                <p class="weather-text"><strong>Temperature:</strong> {{weather.temp}} °C</p>
                <p class="weather-text"><strong>Humidity:</strong> {{weather.humidity}}%</p>
                <p class="weather-text"><strong>Condition:</strong> {{weather.condition}}</p>
            </mat-card-content>
            </mat-card>
        </div>
        <div *ngIf="weatherResource.isLoading()" class="loading-state">
            <mat-icon>hourglass_empty</mat-icon>
            Loading weather data...
        </div>
        <div *ngIf="weatherResource.error()" class="error-state">
            <mat-icon>error</mat-icon>
            Error loading weather data
        </div>
</div>
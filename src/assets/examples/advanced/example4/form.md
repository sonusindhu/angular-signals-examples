```html
<div class="content-area">
        <h2>Signal-based Disable Reactive Form</h2>
        <div class="demo-section">
          <mat-card>
            <mat-card-content>
              <button mat-raised-button (click)="toggleDisabled()">
                {{ disabledSignal() ? 'Enable' : 'Disable' }} Form
              </button>
              <form [formGroup]="form">
                <label>
                  Name:
                  <input formControlName="name" [disableControl]="disabledSignal()" />
                </label>
                <br />
                <label>
                  Email:
                  <input formControlName="email" [disableControl]="disabledSignal()" />
                </label>
                <br />
                <button type="submit" [disabled]="form.invalid">Submit</button>
              </form>
              <pre>{{ form.value | json }}</pre>
            </mat-card-content>
          </mat-card>
        </div>
      </div>

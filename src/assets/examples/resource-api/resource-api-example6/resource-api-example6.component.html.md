```code
<div class="content-area">
  <h2>Resource API Example 6: httpResource with Chuck Norris API</h2>
  <p>This example demonstrates using httpResource to fetch random jokes from an external API with simple URL-based resource loading.</p>
</div>

<div class="demo-section">
  <h3>Demo Content</h3>
  <mat-card>
    <mat-card-content>
      <div class="demo-actions">
        <button mat-raised-button color="primary" (click)="jokeSignal.reload()">
          <mat-icon>refresh</mat-icon>
          Get New Joke
        </button>
      </div>
      
      <div class="joke-display" *ngIf="jokeSignal.value() as joke">
        <mat-card class="joke-card">
          <mat-card-header>
            <mat-card-title>
              <mat-icon>mood</mat-icon>
              Chuck Norris Joke
            </mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <p class="joke-text">{{$any(joke).value}}</p>
            <div class="joke-meta">
              <span class="joke-id">ID: {{$any(joke).id}}</span>
              <span class="joke-url">
                <a [href]="$any(joke).url" target="_blank">
                  <mat-icon>link</mat-icon>
                  View Original
                </a>
              </span>
            </div>
          </mat-card-content>
        </mat-card>
      </div>
      
      <div *ngIf="jokeSignal.isLoading()" class="loading-state">
        <mat-icon>hourglass_empty</mat-icon>
        Loading a new joke...
      </div>
      
      <div *ngIf="jokeSignal.error()" class="error-state">
        <mat-icon>error</mat-icon>
        Error loading joke
      </div>
    </mat-card-content>
  </mat-card>
</div>
```

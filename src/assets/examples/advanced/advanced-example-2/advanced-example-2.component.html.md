```html
<mat-card>
  <mat-card-title>HTTP Caching with RxJS <code>shareReplay</code></mat-card-title>
  <mat-card-content>
    <p>
      This example demonstrates how to cache HTTP requests using <code>shareReplay</code> in a service.
    </p>
    <ng-container *ngIf="users$ | async as users; else loading">
      <ul>
        <li *ngFor="let user of users">
          <strong>{{ user.name }}</strong> ({{ user.email }})
        </li>
      </ul>
    </ng-container>
    <ng-template #loading>
      <p>Loading users...</p>
    </ng-template>
  </mat-card-content>
</mat-card>
```

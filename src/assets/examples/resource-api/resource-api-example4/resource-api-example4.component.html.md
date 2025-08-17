```code
<div class="demo-header">
  <h2>GitHub Users Integration</h2>
  <p>This example demonstrates fetching real GitHub user profiles using the GitHub API. Each time you reload, you'll see different user information including avatars, follower counts, and bio details.</p>
</div>

<mat-card class="demo-card">
  <mat-card-header>
    <mat-card-title>GitHub User Profile</mat-card-title>
    <mat-card-subtitle>Real GitHub API integration with user details</mat-card-subtitle>
  </mat-card-header>
  <mat-card-content>
    <div *ngIf="userSignal.value() as user" class="user-profile">
      <div class="user-card">
        <div class="user-avatar">
          <img [src]="user.avatar_url" [alt]="user.login" class="avatar">
        </div>
        <div class="user-info">
          <h3>{{ user.name || user.login }}</h3>
          <p class="username">{{ '@' + user.login }}</p>
          <p class="bio" *ngIf="user.bio">{{ user.bio }}</p>
          <div class="user-stats">
            <div class="stat">
              <mat-icon>group</mat-icon>
              <span>{{ user.followers }} followers</span>
            </div>
            <div class="stat">
              <mat-icon>person_add</mat-icon>
              <span>{{ user.following }} following</span>
            </div>
            <div class="stat">
              <mat-icon>folder</mat-icon>
              <span>{{ user.public_repos }} repos</span>
            </div>
          </div>
          <div class="user-actions">
            <a mat-raised-button color="primary" [href]="user.html_url" target="_blank" class="github-btn">
              <mat-icon>open_in_new</mat-icon>
              View GitHub Profile
            </a>
            <button mat-raised-button color="accent" (click)="copyUsername(user.login)" class="copy-username-btn">
              <mat-icon>content_copy</mat-icon>
              Copy Username
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <div *ngIf="userSignal.isLoading()" class="loading-state">
      <mat-icon>hourglass_empty</mat-icon>
      Loading user data...
    </div>
    
    <div *ngIf="userSignal.error()" class="error-state">
      <mat-icon>error</mat-icon>
      Error loading user data
    </div>
  </mat-card-content>
</mat-card>
```

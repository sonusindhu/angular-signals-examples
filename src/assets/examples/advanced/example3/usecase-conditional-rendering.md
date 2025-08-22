```html
<ng-container *ngIf="isLoggedIn(); else loggedOut">
  <p>Welcome back, user!</p>
</ng-container>
<ng-template #loggedOut>
  <p>Please log in to continue.</p>
</ng-template>
```

**How it works:**
- Shows a welcome message if the user is logged in.
- If not, displays a login prompt using an `ng-template` with the `else` syntax.

```html
<ng-container *ngIf="showDialog()">
  <ng-container [ngTemplateOutlet]="dialogTemplate" [ngTemplateOutletContext]="{ $implicit: 'Hello from dialog!' }"></ng-container>
</ng-container>
<ng-template #dialogTemplate let-message>
  <div class="dialog">
    <p>{{ message }}</p>
    <button (click)="closeDialog()">Close</button>
  </div>
</ng-template>
```

**How it works:**
- Uses `[ngTemplateOutlet]` to render a dialog template dynamically.
- Passes a message to the template using `[ngTemplateOutletContext]`.

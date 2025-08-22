```html
<button (click)="toggleContent()">
  {{ loadContent() ? 'Unload' : 'Load' }} Content
</button>
<ng-container *ngIf="loadContent(); else notLoaded">
  <ng-template [ngTemplateOutlet]="dynamicContent"></ng-template>
</ng-container>
<ng-template #notLoaded>
  <p>Click "Load Content" to display dynamic content.</p>
</ng-template>
<ng-template #dynamicContent>
  <p>This content was loaded dynamically!</p>
</ng-template>
```

**How it works:**
- Dynamically loads and displays content using `<ng-template>` and `[ngTemplateOutlet]`.

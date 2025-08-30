```html
<div class="demo-section">
  <mat-card>
    <mat-card-content>
      <form>
        <label>
          Name:
          <input type="text" [value]="form().name" (input)="updateForm({ name: $any($event.target).value })" />
        </label>
        <br />
        <label>
          Age:
          <input type="number" [value]="form().age" (input)="updateForm({ age: +$any($event.target).value })" />
        </label>
      </form>
      <div class="mt-2" style="display: flex; gap: 1rem;">
        <button mat-flat-button color="primary" (click)="undo()" [disabled]!canUndo()>Undo</button>
        <button mat-flat-button color="accent" (click)="redo()" [disabled]!canRedo()>Redo</button>
      </div>
      <pre>{{ form() | json }}</pre>
    </mat-card-content>
  </mat-card>
</div>
```

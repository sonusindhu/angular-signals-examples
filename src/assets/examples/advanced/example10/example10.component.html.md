```html
<div class="demo-section">
    <mat-card>
        <mat-card-content>
        <div class="collab-list-container">
            <div class="add-section">
            <input [(ngModel)]="newItem" placeholder="Add item" (keyup.enter)="add()" />
            <button mat-flat-button color="primary" (click)="add()">Add</button>
            <button mat-flat-button color="warn" (click)="clear()">Clear</button>
            </div>
            <ul>
                @for (item of list(); track $index) {
                <li>
                    <input [value]="item" (change)="edit($index, $any($event.target).value)" />
                    <button mat-flat-button color="warn" (click)="remove($index)">Remove</button>
                </li>
                }
            </ul>
            <pre>{{ list() | json }}</pre>
        </div>
        </mat-card-content>
    </mat-card>
</div>
```

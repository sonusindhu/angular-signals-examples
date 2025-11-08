```html
<div class="demo-section flex gap-4 flex-col md:flex-row">
  <mat-card class="w-full md:w-1/2">
    <mat-card-content>
      <form (ngSubmit)="onSubmit()">
        <!-- name -->
        <div>
          <input placeholder="Name" [field]="userForm.name" />
          @if(userForm.name().touched() || userForm.name().dirty()) {
            @for (err of userForm.name().errors(); track err.kind) {
              <p style="color:red">{{ err.message }}</p>
            }
          }
        </div>

        <!-- email -->
        <div>
          <input placeholder="Email" [field]="userForm.email" />
          @if(userForm.email().touched() || userForm.email().dirty()) {
            @for (err of userForm.email().errors(); track err.kind) {
              <p style="color:red">{{ err.message }}</p>
            }
          }
        </div>

        <!-- hobbies -->
        <div>
          <h3>Hobbies</h3>
          @for (hobby of userForm.hobbies; track hobby; let i = $index) {
            <div>
              <input [field]="hobby.name" placeholder="Enter hobby" />
              @if(hobby.name().touched() || hobby.name().dirty()) {
                @for (err of hobby.name().errors(); track err.kind) {
                  <p style="color:red">{{ err.message }}</p>
                }
              }
              <button mat-stroked-button color="primary" type="button" (click)="removeHobby(i)">Remove</button>
            </div>
          }
          @empty {
            <p class="text-gray-500 py-2">No hobbies added yet.</p>
          }
          <button mat-stroked-button color="primary" type="button" (click)="addHobby()">+ Add Hobby</button>
        </div>

        <div>
          <button mat-stroked-button color="primary" type="submit" [disabled]="!userForm().valid">Save</button>
        </div>
      </form>
    </mat-card-content>
  </mat-card>
</div>
```

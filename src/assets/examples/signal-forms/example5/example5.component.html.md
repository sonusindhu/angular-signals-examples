```html
<form (ngSubmit)="onSubmit()">
  <!-- User fields -->
  <div>
    <input placeholder="Name" [control]="userForm.name" />
    @if(userForm.name().touched() || userForm.name().dirty()) {
      @for (err of userForm.name().errors(); track err.kind) {
        <p style="color:red">{{ err.message }}</p>
      }
    }
  </div>
  <div>
    <input placeholder="Age" type="number" [control]="userForm.age" />
    @if(userForm.age().touched() || userForm.age().dirty()) {
      @for (err of userForm.age().errors(); track err.kind) {
        <p style="color:red">{{ err.message }}</p>
      }
    }
  </div>
  <div>
    <input placeholder="Email" [control]="userForm.email" />
    @if(userForm.email().touched() || userForm.email().dirty()) {
      @for (err of userForm.email().errors(); track err.kind) {
        <p style="color:red">{{ err.message }}</p>
      }
    }
  </div>
  <div>
    <label>Gender:</label>
    <div class="flex gap-2 items-center mb-2">
      <label><input type="radio" [control]="userForm.gender" value="male" /> Male</label>
      <label><input type="radio" [control]="userForm.gender" value="female" /> Female</label>
      <label><input type="radio" [control]="userForm.gender" value="other" /> Other</label>
    </div>
    @if(userForm.gender().touched() || userForm.gender().dirty()) {
      @for (err of userForm.gender().errors(); track err.kind) {
        <p style="color:red">{{ err.message }}</p>
      }
    }
  </div>
  <div>
    <label>
      <input type="checkbox" [control]="userForm.subscribe" /> Subscribe to newsletter:
    </label>
  </div>
  <!-- Address fields -->
  <div>
    <h3>Address</h3>
    <div class="flex gap-2 mb-4">
      <div>
        <input placeholder="Street" [control]="userForm.address.street" />
      </div>
      <div>
        <input placeholder="City" [control]="userForm.address.city" />
      </div>
      <div>
        <input placeholder="Zip" [control]="userForm.address.zip" />
      </div>
      <div>
        <select [control]="userForm.address.country">
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Other">Other</option>
        </select>
        @if(userForm.address.country().touched() || userForm.address.country().dirty()) {
          @for (err of userForm.address.country().errors(); track err.kind) {
            <p style="color:red">{{ err.message }}</p>
          }
        }
      </div>
    </div>
  </div>
  <!-- Contacts array -->
  <div>
    <h3>Contacts</h3>
    @for (contact of userForm.address.contacts; track contact; let i = $index) {
      <div class="contact-card">
        <div class="flex gap-2 items-center mb-2">
          <input [control]="contact.type" placeholder="Type (e.g. phone, email)" />
          <input [control]="contact.value" placeholder="Value" />
          <button mat-flat-button color="warn" type="button" (click)="removeContact(i)">Remove Contact</button>
          @if(contact.type().touched() || contact.type().dirty()) {
            @for (err of contact.type().errors(); track err.kind) {
              <p style="color:red">{{ err.message }}</p>
            }
          }
          @if(contact.value().touched() || contact.value().dirty()) {
            @for (err of contact.value().errors(); track err.kind) {
              <p style="color:red">{{ err.message }}</p>
            }
          }
        </div>
        <!-- Tags array for each contact -->
        <div class="ml-6">
          <h4>Tags</h4>
          @for (tag of contact.tags; track tag; let j = $index) {
            <div class="flex gap-2 items-center mb-2">
              <input [control]="tag" placeholder="Tag" />
              <button mat-flat-button color="warn" type="button" (click)="removeTag(i, j)">Remove Tag</button>
              @if(tag().touched() || tag().dirty()) {
                @for (err of tag().errors(); track err.kind) {
                  <p style="color:red">{{ err.message }}</p>
                }
              }
            </div>
          }
          @empty {
            <p class="text-gray-500 py-2">No tags added yet.</p>
          }
          <button mat-flat-button color="primary" type="button" (click)="addTag(i)">+ Add Tag</button>
        </div>
      </div>
    }
    @empty {
      <p class="text-gray-500 py-2">No contacts added yet.</p>
    }
    <button mat-flat-button color="primary" type="button" (click)="addContact()">+ Add Contact</button>
  </div>
  <div>
    <button mat-stroked-button color="primary" type="submit" [disabled]!userForm().valid>Save</button>
  </div>
</form>

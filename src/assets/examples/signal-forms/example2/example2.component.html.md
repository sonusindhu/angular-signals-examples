```html
<form>
  <div>
    <input type="text" placeholder="Enter name" [field]="userForm.name" class="w-full p-2 border border-gray-300 rounded-md text-base mb-4" />
    @if(userForm.name().touched() || userForm.name().dirty()){
        @for (item of userForm.name().errors(); track item) {
        <p class="text-red-500 p-0">{{ item.message }}</p>
        }
    }
  </div>
  <div>
    <input type="email" placeholder="Enter email" [field]="userForm.email" class="w-full p-2 border border-gray-300 rounded-md text-base mb-4" />
    @if(userForm.email().touched() || userForm.email().dirty()){
        @for (item of userForm.email().errors(); track $index) {
        <p class="text-red-500 p-0">{{ item.message }}</p>
        }
    }
  </div>
</form>
```

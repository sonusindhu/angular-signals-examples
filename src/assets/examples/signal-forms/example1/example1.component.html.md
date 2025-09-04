```html
<form>

  <div>
    <input type="text" placeholder="Enter name" [control]="userForm.name" class="w-full p-2 border border-gray-300 rounded-md text-base mb-4" />
  </div>

  <div>
    <input type="email" placeholder="Enter email" [control]="userForm.email" class="w-full p-2 border border-gray-300 rounded-md text-base mb-4" />
  </div>

  <div>
    Name: {{ userForm().value().name }} <br />
    Email: {{ userForm().value().email }} <br />
    Form Value: {{ userForm().value() | json }}
  </div>

</form>
```

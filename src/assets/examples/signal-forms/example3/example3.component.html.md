```html
<div class="demo-section flex gap-4 flex-col md:flex-row">
<mat-card class="w-full md:w-1/2">
    <mat-card-content>
    <form (ngSubmit)="onSubmit()">
        <div>
        <input type="text" placeholder="Name" [field]="userForm.name" class="w-full p-2 border border-gray-300 rounded-md text-base mb-4" />
        @if(userForm.name().touched() || userForm.name().dirty()){
            @for (item of userForm.name().errors(); track item.kind) {
                <p class="text-red-500 p-0">{{ item.message }}</p>
            }
        }
        </div>
        <div>
        <input type="email" placeholder="Email" [field]="userForm.email" class="w-full p-2 border border-gray-300 rounded-md text-base mb-4" />
        @if(userForm.email().touched() || userForm.email().dirty()){
            @for (item of userForm.email().errors(); track item.kind) {
                <p class="text-red-500 p-0">{{ item.message }}</p>
            }
        }
        </div>
        <div>
        <input type="password" placeholder="Password" [field]="userForm.password" class="w-full p-2 border border-gray-300 rounded-md text-base mb-4" />
        @if(userForm.password().touched() || userForm.password().dirty()){
            @for (item of userForm.password().errors(); track item.kind) {
                <p class="text-red-500 p-0">{{ item.message }}</p>
            }
        }
        </div>
        <div>
        <input type="password" placeholder="Confirm Password" [field]="userForm.confirm_password" class="w-full p-2 border border-gray-300 rounded-md text-base mb-4" />
        @if(userForm.confirm_password().touched() || userForm.confirm_password().dirty()){
            @for (item of userForm.confirm_password().errors(); track  item.kind) {
                <p class="text-red-500 p-0">{{ item.message }}</p>
            }
        }
        </div>
        <button mat-raised-button color="primary" type="submit" [disabled]="!userForm().valid">Sign Up</button>
    </form>
    </mat-card-content>
</mat-card>
<mat-card class="w-full md:w-1/2">
    <mat-card-content>
        <h3>Key Features</h3>
    <ul>
        <li>⚡ Reactive form state with Angular signals</li>
        <li>✅ Built-in and custom validation (password match)</li>
        <li>🔄 Real-time UI updates on input changes</li>
        <li>🧩 Minimal, readable form logic</li>
        <li>🛠️ Easily extensible for more fields and rules</li>
    </ul>
    <p>This example demonstrates efficient form state management and custom validation using Angular signals, with instant error feedback and a clean, extensible approach.</p>
    </mat-card-content>
</mat-card>
</div>
```

import { Component, effect, signal } from '@angular/core';
import { form, required, email, minLength, pattern, schema, Control, FieldPath, validate, customError } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MarkdownComponent } from 'ngx-markdown';
import { JsonPipe } from '@angular/common';

function matchPassword(
    path: FieldPath<{ password: unknown, confirm_password: unknown }>
) {

    validate(path, (form) => {
        // get path value
        const formValue = form.value();
        
        // if when condition is false, return null
        if(formValue.password !== formValue.confirm_password){
            return customError({ kind: 'notMatched', message: 'Passwords do not match' });
        }

        return null;
    })

}


function matchConfirmPassword(path: FieldPath<string>) {

    validate(path, (confirmPassword) => {
        const field: any = confirmPassword.field;

        const password = field()?.['structure'].parent?.value()?.password;

        // if when condition is false, return null
        if(password !== confirmPassword.value()){
            return customError({ kind: 'notMatched', message: 'Passwords do not match' });
        }

        return null;
    })

}


const signupSchema = schema<{ name: string; email: string; password: string; confirm_password: string }>((form) => {
  
    required(form.name, { message: 'Name is required' });
    pattern(form.name, /^[a-zA-Z ]+$/, { message: 'Enter a valid name' });

    required(form.email, { message: 'Email is required' });
    email(form.email, { message: 'Enter a valid email' });

    required(form.password, { message: 'Password is required' });
    minLength(form.password, 6, { message: 'Password must be at least 6 characters' });

    required(form.confirm_password, { message: 'Confirm password is required' });

    //   matchPassword(form); // it will inject in the form level error
    matchConfirmPassword(form.confirm_password); // it will inject in the confirm_password field level error
});

@Component({
  selector: 'app-form-example3',
  standalone: true,
  imports: [
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MarkdownComponent,
    RouterModule,
    Control,
    JsonPipe
  ],
  templateUrl: './example3.component.html',
  styleUrls: ['./example3.component.scss']
})
export class FormExample3Component {
  public user = signal({ name: '', email: '', password: '', confirm_password: '' });
  public userForm = form(this.user, signupSchema);

  public errors = effect(() => {
    return this.userForm().errors();
  });

  onSubmit() {
    if (this.userForm().valid()) {
      alert('Signup successful!');
    }
  }
}

```ts
import { Component, effect, signal } from '@angular/core';
import { form, Control, required, pattern, email, schema } from '@angular/forms/signals';

const formSchema = schema<{name: string, email: string}>((form) => {
  required(form.name, { message: 'please enter your name' });
  pattern(form.name, /^[a-z ]+$/i, { message: 'Enter valid name' });
  required(form.email, { message: 'please enter your email' });
  email(form.email, { message: 'Enter valid email' });
});

@Component({
  selector: 'app-form-example2',
  templateUrl: './example2.component.html',
  styleUrl: './example2.component.scss'
})
export class FormExample2Component {
  public user = signal({ name: '', email: '' });
  public errors = effect(() => {
    console.log('errors - ', this.userForm().errors())
    return this.userForm().errors();
  });
  public userForm = form(this.user, formSchema);
}

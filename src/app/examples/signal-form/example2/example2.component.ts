import { Component, effect, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownComponent } from 'ngx-markdown';
import { RouterModule } from '@angular/router';

import { form, Field, required, pattern, email, schema } from '@angular/forms/signals';
import { JsonPipe } from '@angular/common';


const formSchema = schema<{name: string, email: string}>((form) => {
  required(form.name, { message: 'please enter your name' });
  pattern(form.name, /^[a-z ]+$/i, { message: 'Enter valid name' });


  required(form.email, { message: 'please enter your email' });
  email(form.email, { message: 'Enter valid email' });
});

@Component({
  selector: 'app-form-example1',
  imports: [
    MatButtonModule, 
    MatTabsModule, 
    MatCardModule, 
    MatIconModule, 
    MarkdownComponent, 
    RouterModule, 
    Field
  ],
  templateUrl: './example2.component.html',
  styleUrl: './example2.component.scss'
})
export class FormExample2Component {

  // create a signal for the user form
  public user = signal({ name: '', email: '' });

  public errors = effect(() => {
    console.log('errors - ', this.userForm().errors())
    return this.userForm().errors();
  });

  // create a form using the user signal
  public userForm = form(this.user, formSchema);

}

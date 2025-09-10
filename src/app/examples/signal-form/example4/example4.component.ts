import { Component, effect, signal } from '@angular/core';
import { form, required, email, minLength, pattern, schema, Control, FieldPath, validate, customError, applyEach, validateTree } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MarkdownComponent } from 'ngx-markdown';
import { JsonPipe } from '@angular/common';

type Hobby = {
  id?: number;
  name: string;
}

type User = {
  name: string;
  email: string;
  hobbies: Hobby[];
};



const userSchema = schema<User>((f) => {
  required(f.name, { message: 'Name is required' });
  required(f.email, { message: 'Email is required' });

  applyEach(f.hobbies, (hobby) => {
    required(hobby.name, { message: 'Hobby name is required' });
  });
  
});

@Component({
  selector: 'app-form-example4',
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
  templateUrl: './example4.component.html',
  styleUrls: ['./example4.component.scss']
})
export class FormExample4Component {
  
  // initial state
  user = signal<User>({ name: '', email: '', hobbies: [] });

  // create ONE form
  userForm = form(this.user, userSchema);

  addHobby() {
    this.user.update(u => ({
      ...u,
      hobbies: [...u.hobbies, { id: u.hobbies.length + 1, name: '' }]
    }));
  }

  removeHobby(index: number) {
    const currentUser = this.user();
    this.user.set({
      ...currentUser,
      hobbies: currentUser.hobbies.filter((_, i) => i !== index)
    });
  }

  public errors = effect(() => {
    return this.userForm().errors();
  });

  onSubmit() {
    if (this.userForm().valid()) {
      alert('Signup successful!');
    }
  }
}

```typescript
import { JsonPipe } from '@angular/common';
import { Component, signal, effect } from '@angular/core';
import { form, required, email as emailValidator, minLength, schema, applyEach, Field } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

// Types for advanced nested form
export type ContactTag = string;

export type Contact = {
  type: string;
  value: string;
  tags: ContactTag[];
};

export type Address = {
  street: string;
  city: string;
  zip: string;
  country: string;
  contacts: Contact[];
};

export type User = {
  name: string;
  age: number | '';
  email: string;
  gender: string;
  subscribe: boolean;
  address: Address;
};

// Schema for validation

const userSchema = schema<User>((f) => {
  required(f.name, { message: 'Name is required' });
  required(f.age, { message: 'Age is required' });
  required(f.email, { message: 'Email is required' });
  emailValidator(f.email, { message: 'Invalid email' });
  required(f.gender, { message: 'Gender is required' });
  required(f.address.street, { message: 'Street is required' });
  required(f.address.city, { message: 'City is required' });
  required(f.address.zip, { message: 'Zip is required' });
  required(f.address.country, { message: 'Country is required' });
  applyEach(f.address.contacts, (contact) => {
    required(contact.type, { message: 'Contact type is required' });
    required(contact.value, { message: 'Contact value is required' });
    applyEach(contact.tags, (tag) => {
      required(tag, { message: 'Tag is required' });
      minLength(tag, 2, { message: 'Tag must be at least 2 characters' });
    });
  });
});

@Component({
  selector: 'app-example5',
  templateUrl: './example5.component.html',
  styleUrls: ['./example5.component.scss'],
  imports: [
    MatButtonModule,
    MatCardModule,
    RouterModule,
    Field,
    JsonPipe
  ],
})
export class FormExample5Component {
  user = signal<User>({
    name: '',
    age: '',
    email: '',
    gender: '',
    subscribe: false,
    address: {
      street: '',
      city: '',
      zip: '',
      country: '',
      contacts: []
    }
  });

  userForm = form(this.user, userSchema);

  addContact() {
    this.user.update(u => ({
      ...u,
      address: {
        ...u.address,
        contacts: [...u.address.contacts, { type: '', value: '', tags: [] }]
      }
    }));
  }

  removeContact(index: number) {
    this.user.update(u => ({
      ...u,
      address: {
        ...u.address,
        contacts: u.address.contacts.filter((_, i) => i !== index)
      }
    }));
  }

  addTag(contactIndex: number) {
    this.user.update(u => ({
      ...u,
      address: {
        ...u.address,
        contacts: u.address.contacts.map((contact, i) =>
          i === contactIndex
            ? { ...contact, tags: [...contact.tags, ''] }
            : contact
        )
      }
    }));
  }

  removeTag(contactIndex: number, tagIndex: number) {
    this.user.update(u => ({
      ...u,
      address: {
        ...u.address,
        contacts: u.address.contacts.map((contact, i) =>
          i === contactIndex
            ? { ...contact, tags: contact.tags.filter((_, j) => j !== tagIndex) }
            : contact
        )
      }
    }));
  }

  public errors = effect(() => {
    return this.userForm().errors();
  });

  onSubmit() {
    if (this.userForm().valid()) {
      // handle submit
      console.log('Form submitted:', this.user());
    }
  }
}

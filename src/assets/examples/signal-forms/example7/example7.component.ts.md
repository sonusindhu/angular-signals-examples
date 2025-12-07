```typescript
import { Component, inject, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { form, Field } from '@angular/forms/signals';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-form-example7',
  standalone: true,
  imports: [
    MatCardModule, 
    MatIconModule, 
    RouterModule, 
    Field,
    JsonPipe
  ],
  templateUrl: './example7.component.html',
  styleUrl: './example7.component.scss'
})
export class FormExample7Component {

  public user = signal({ name: '', email: '' });

  public userForm = form(this.user);

}
```

```typescript
import { Component, inject, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { form, Control } from '@angular/forms/signals';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-form-example1',
  standalone: true,
  imports: [
    MatCardModule, 
    MatIconModule, 
    RouterModule, 
    Control,
    JsonPipe
  ],
  templateUrl: './example1.component.html',
  styleUrl: './example1.component.scss'
})
export class FormExample1Component {

  public user = signal({ name: '', email: '' });

  public userForm = form(this.user);

}
```

import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownComponent } from 'ngx-markdown';
import { RouterModule } from '@angular/router';

import { form, Control } from '@angular/forms/signals';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-form-example1',
  imports: [
    MatButtonModule, 
    MatTabsModule, 
    MatCardModule, 
    MatIconModule, 
    MarkdownComponent, 
    RouterModule, 
    Control,
    JsonPipe
  ],
  templateUrl: './example1.component.html',
  styleUrl: './example1.component.scss'
})
export class FormExample1Component {

  // create a signal for the user form
  public user = signal({ name: '', email: '' });

  // create a form using the user signal
  public userForm = form(this.user);

}

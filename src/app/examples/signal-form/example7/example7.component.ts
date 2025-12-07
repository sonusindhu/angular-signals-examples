import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownComponent } from 'ngx-markdown';
import { RouterModule } from '@angular/router';

import { form, Field } from '@angular/forms/signals';
import { JsonPipe } from '@angular/common';
import { NgxRatingComponent } from "./ngx-rating";

@Component({
  selector: 'app-form-example7',
  imports: [
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MarkdownComponent,
    RouterModule,
    Field,
    JsonPipe,
    NgxRatingComponent
],
  templateUrl: './example7.component.html',
  styleUrl: './example7.component.scss'
})
export class Example7Component {

  // create a signal for the user form
  public user = signal({ name: '', email: '', rating: null });

  // create a form using the user signal
  public userForm = form(this.user);

}

import { Component, inject, signal } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownComponent } from 'ngx-markdown';
import { RouterModule } from '@angular/router';
import { DisableControlDirective } from './disable-control.directive';

@Component({
  selector: 'app-advanced-example4',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MarkdownComponent,
    RouterModule,
    JsonPipe,
    DisableControlDirective
  ],
  templateUrl: './example4.component.html',
  styleUrls: ['./example4.component.scss']
})
export class AdvancedExample4Component {
  private fb = inject(FormBuilder);
  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  });
  disabledSignal = signal(false);

  toggleDisabled() {
    this.disabledSignal.set(!this.disabledSignal());
  }
}

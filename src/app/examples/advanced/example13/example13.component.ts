import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl } from '@angular/forms';
import { ToggleComponent } from './toggle-control.component';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MarkdownComponent } from 'ngx-markdown';
import { JsonPipe, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-advanced-example13',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    FormsModule,
    ToggleComponent,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MarkdownComponent,
    JsonPipe,
    NgClass
  ],
  templateUrl: './example13.component.html',
  styleUrl: './example13.component.scss'
})
export class AdvancedExample13Component {
  toggleControl = new FormGroup({
    toggle: new FormControl<boolean>(false)
  });
  toggleModel = false;

  reactiveDisabled = false;
  ngModelDisabled = false;

  toggleReactiveDisabled() {
    this.reactiveDisabled = !this.reactiveDisabled;
    if (this.reactiveDisabled) {
      this.toggleControl.disable();
    } else {
      this.toggleControl.enable();
    }
  }

  toggleNgModelDisabled() {
    this.ngModelDisabled = !this.ngModelDisabled;
  }
}

import { Component } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownComponent } from 'ngx-markdown';
import { RouterModule } from '@angular/router';
import { AutoSaveFormDirective } from './auto-save-form.directive';
import { AutoSaveFormDemoComponent } from './auto-save-form-demo.component';

@Component({
  selector: 'app-advanced-example5',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MarkdownComponent,
    RouterModule,
    AutoSaveFormDirective,
    AutoSaveFormDemoComponent
],
  templateUrl: './example5.component.html',
  styleUrls: ['./example5.component.scss']
})
export class AdvancedExample5Component {}

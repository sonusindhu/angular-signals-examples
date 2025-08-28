import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MarkdownComponent } from 'ngx-markdown';
import { RouterModule } from '@angular/router';
import { FancyButtonComponent } from './fancy-button.component';

@Component({
  selector: 'app-example6',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MarkdownComponent,
    RouterModule,
    FancyButtonComponent
  ],
  templateUrl: './example6.component.html',
  styleUrls: ['./example6.component.scss']
})
export class Example6Component {}

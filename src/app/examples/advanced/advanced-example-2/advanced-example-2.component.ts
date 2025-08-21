

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownModule } from 'ngx-markdown';
import { Observable } from 'rxjs';
import { AdvancedExample2Service } from './advanced-example-2.service';

@Component({
  selector: 'app-advanced-example-2',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MarkdownModule
  ],
  templateUrl: './advanced-example-2.component.html',
  styleUrls: ['./advanced-example-2.component.scss']
})

export class AdvancedExample2Component {
  public service: AdvancedExample2Service = inject(AdvancedExample2Service);
  users$: Observable<any[]> = this.service.getUsers() as Observable<any[]>;

  refresh() {
    this.users$ = this.service.getUsers() as Observable<any[]>;
  }
}

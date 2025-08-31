import { Component, inject } from '@angular/core';
import { CollaborativeListService } from '../../../shared/collaborative-list.service';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownComponent } from 'ngx-markdown';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-advanced-example10',
  standalone: true,
  imports: [
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MarkdownComponent,
    RouterModule,
    MatButtonModule,
    JsonPipe,
    FormsModule
  ],
  templateUrl: './example10.component.html',
  styleUrl: './example10.component.scss'
})
export class Example10Component {
  private readonly collabService = inject(CollaborativeListService);

  public list = this.collabService.list;
  public newItem = '';

  add() {
    if (this.newItem.trim()) {
      this.collabService.addItem(this.newItem.trim());
      this.newItem = '';
    }
  }

  remove(index: number) {
    this.collabService.removeItem(index);
  }

  edit(index: number, value: string) {
    this.collabService.editItem(index, value);
  }

  clear() {
    this.collabService.clear();
  }
}

import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-for-example-1',
  standalone: true,
  imports: [CommonModule, FormsModule, MatTabsModule, MatCardModule, MarkdownComponent],
  templateUrl: './for-example-1.component.html',
  styleUrls: ['./for-example-1.component.scss']
})
export class ForExample1Component {
  count = signal(3);
  get items() {
    return Array(this.count()).fill(0);
  }

  onCountInput(event: Event) {
    const value = (event.target instanceof HTMLInputElement) ? event.target.valueAsNumber : 1;
    this.count.set(value || 1);
  }
}



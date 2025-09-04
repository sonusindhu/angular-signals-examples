import { Component, signal } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownComponent } from 'ngx-markdown';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-switch-example-1',
  standalone: true,
  imports: [FormsModule, MatTabsModule, MatCardModule, MatIconModule, MarkdownComponent, RouterModule, MatButtonModule],
  templateUrl: './switch-example-1.component.html',
  styleUrls: ['./switch-example-1.component.scss']
})
export class SwitchExample1Component {
  status = signal('pending');

  onStatusChange(eventOrValue: Event | string) {
    if (typeof eventOrValue === 'string') {
      this.status.set(eventOrValue);
    } else {
      const value = (eventOrValue.target instanceof HTMLSelectElement) ? eventOrValue.target.value : 'pending';
      this.status.set(value);
    }
  }
}

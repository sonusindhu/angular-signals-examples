import { Component, signal } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MarkdownComponent } from 'ngx-markdown';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-if-example-1',
  standalone: true,
  imports: [FormsModule, MatTabsModule, MatCardModule, MarkdownComponent, RouterModule, MatButtonModule],
  templateUrl: './if-example-1.component.html',
  styleUrls: ['./if-example-1.component.scss']
})
export class IfExample1Component {
  show = signal(false);

  onToggle(event: Event) {
    const checked = (event.target instanceof HTMLInputElement) ? event.target.checked : false;
    this.show.set(checked);
  }
}



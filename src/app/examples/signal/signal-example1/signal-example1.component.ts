import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
    selector: 'app-signal-example1',
    imports: [RouterModule, MatButtonModule, MatTabsModule, MarkdownComponent],
    templateUrl: './signal-example1.component.html',
    styleUrl: './signal-example1.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class SignalExample1Component {
  count = signal<number>(1);

  increaseCount() {
    this.count.update((count) => count + 1);
  }

  decreaseCount() {
    this.count.update((count) => count - 1);
  }
}

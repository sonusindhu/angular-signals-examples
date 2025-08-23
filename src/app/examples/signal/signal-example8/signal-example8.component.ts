import { MatTabsModule } from '@angular/material/tabs';
import { MarkdownComponent } from 'ngx-markdown';
import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-signal-example8',
    templateUrl: './signal-example8.component.html',
    styleUrl: './signal-example8.component.scss',
    imports: [MatButtonModule, MatTabsModule, MarkdownComponent, RouterModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class SignalExample8Component {
  count = signal(1000);

  countEffect = effect(() => console.log(this.count()));

  updateCount() {
    this.count.update((count) => count + 1);
  }
}

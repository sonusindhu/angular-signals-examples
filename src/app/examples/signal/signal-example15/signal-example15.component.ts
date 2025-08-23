import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MarkdownComponent } from 'ngx-markdown';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'signal-example15',
    templateUrl: `./signal-example15.component.html`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatButtonModule, MatProgressSpinnerModule, MatTabsModule, MarkdownComponent, RouterModule],
    styleUrl: `./signal-example15.component.scss`,
})
export default class SignalExample15Component {
  loading = signal(false);
  toggleLoader() {
    this.loading.update((state) => !state);
  }
}

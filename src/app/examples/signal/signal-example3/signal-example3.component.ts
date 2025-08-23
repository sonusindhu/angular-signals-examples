import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MarkdownComponent } from 'ngx-markdown';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-signal-example3',
    templateUrl: './signal-example3.component.html',
    styleUrl: './signal-example3.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatFormFieldModule, MatInputModule, MatTabsModule, MarkdownComponent, RouterModule, MatButtonModule]
})
export default class SignalExample3Component {
  name = signal('Sonu Sindhu');

  updateName(name: string) {
    this.name.set(name);
  }
}

import { ChangeDetectionStrategy, Component, WritableSignal, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MarkdownComponent } from 'ngx-markdown';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-signal-example6',
    templateUrl: './signal-example6.component.html',
    styleUrl: './signal-example6.component.scss',
    imports: [FormsModule, MatFormFieldModule, MatInputModule, MatTabsModule, MarkdownComponent, RouterModule, MatButtonModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class SignalExample5Component {
  username = model('Sonu Sindhu');

  // updateUsername(name: string) {
  //   this.username.set(name);
  // }
}

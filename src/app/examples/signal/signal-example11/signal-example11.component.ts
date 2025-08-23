import { MatTabsModule } from '@angular/material/tabs';
import { MarkdownComponent } from 'ngx-markdown';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InputSignalComponent } from './input-signal-title.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-signal-example11',
    templateUrl: './signal-example11.component.html',
    styleUrl: './signal-example11.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatFormFieldModule, MatInputModule, InputSignalComponent, MatTabsModule, MarkdownComponent, RouterModule, MatButtonModule]
})
export default class SignalExample11Component {
  searchInput = signal('');

  searchProduct(searchText: string): void {
    this.searchInput.set(searchText);
  }
}

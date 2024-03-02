import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InputSignalComponent } from './input-signal-title.component';

@Component({
  selector: 'app-signal-example11',
  standalone: true,
  templateUrl: './signal-example11.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatFormFieldModule, MatInputModule, InputSignalComponent],
})
export default class SignalExample11Component {
  searchInput = signal('');

  searchProduct(searchText: string): void {
    this.searchInput.set(searchText);
  }
}

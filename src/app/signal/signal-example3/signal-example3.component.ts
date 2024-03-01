import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-signal-example3',
  standalone: true,
  templateUrl: './signal-example3.component.html',
  styleUrl: './signal-example3.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatFormFieldModule, MatInputModule]
})
export default class SignalExample3Component {
  name = signal('Sonu Sindhu');

  updateName(name: string) {
    this.name.set(name);
  }
}

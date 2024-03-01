import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signal-example2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signal-example2.component.html',
  styleUrl: './signal-example2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class SignalExample2Component {
  count = signal(0);

  constructor() {
    setInterval(() => this.count.set(this.count() + 1), 1000);
  }
}

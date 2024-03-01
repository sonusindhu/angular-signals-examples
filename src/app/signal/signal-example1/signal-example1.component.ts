import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-signal-example1',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
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

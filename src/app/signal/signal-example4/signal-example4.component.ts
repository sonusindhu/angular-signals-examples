import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-signal-example4',
  standalone: true,
  templateUrl: './signal-example4.component.html',
  styleUrl: './signal-example4.component.scss',
  imports: [FormsModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class SignalExample4Component {
  count = signal(0);
  doubleCount = computed(() => this.count() + 2);

  increaseCount() {
    this.count.update(() => this.count() + 1);
  }
}

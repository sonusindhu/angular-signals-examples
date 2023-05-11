import { Component, effect, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-signal-example8',
  standalone: true,
  templateUrl: './signal-example8.component.html',
  styleUrls: ['./signal-example8.component.scss'],
  imports: [MatButtonModule],
})
export default class SignalExample8Component {
  count = signal(1000);

  countEffect = effect(() => console.log(this.count()));

  updateCount() {
    this.count.update((count) => count + 1);
  }
}

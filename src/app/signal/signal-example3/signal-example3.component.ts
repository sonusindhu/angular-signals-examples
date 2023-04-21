import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-example3',
  standalone: true,
  templateUrl: './signal-example3.component.html',
  styleUrls: ['./signal-example3.component.scss'],
})
export default class SignalExample3Component {
  name = signal('Sonu Sindhu');

  updateName(name: string) {
    this.name.set(name);
  }
}

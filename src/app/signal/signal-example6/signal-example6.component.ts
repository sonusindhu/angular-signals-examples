import { Component, WritableSignal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-signal-example6',
  standalone: true,
  templateUrl: './signal-example6.component.html',
  styleUrls: ['./signal-example6.component.scss'],
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
})
export default class SignalExample5Component {
  username = signal('Sonu Sindhu');

  updateUsername(name: string) {
    this.username.set(name);
  }
}

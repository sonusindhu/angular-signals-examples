import { Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

@Component({
  selector: 'app-signal-example7',
  standalone: true,
  templateUrl: './signal-example7.component.html',
  styleUrls: ['./signal-example7.component.scss'],
})
export default class SignalExample5Component {
  counter$ = interval(1000);
  counter = toSignal(this.counter$);
}

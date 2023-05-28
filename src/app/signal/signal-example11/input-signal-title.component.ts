import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'input-signal-title',
  standalone: true,
  template: ` <p>Username is : <b>{{ title() }}</b> </p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputSignalComponent {
  @Input() title: Signal<string>;
}

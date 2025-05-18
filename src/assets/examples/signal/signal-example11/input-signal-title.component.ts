import {
  ChangeDetectionStrategy,
  Component,
  Input,
  signal,
} from '@angular/core';

@Component({
  selector: 'input-signal-title',
  standalone: true,
  template: ` <p>
    Username is : <b>{{ title() }}</b>
  </p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputSignalComponent {
  @Input() title = signal('');
}

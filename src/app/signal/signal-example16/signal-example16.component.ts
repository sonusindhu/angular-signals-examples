import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'signal-example16',
  standalone: true,
  templateUrl: `./signal-example16.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule],
  styles: [
    `
      button.loading {
        background: #f14e4e;
      }
      .loader-area{
        margin-top: 20px;
      }
    `,
  ],
})
export default class SignalExample16Component {
  name = signal('Sonu');

  readOnlyName = this.name.asReadonly();

  updateName(updatedName: string) {
    this.name.set(updatedName);
  }
  
}

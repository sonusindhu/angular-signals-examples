import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
    selector: 'app-defer-example5',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatCardModule, MatChipsModule],
    templateUrl: './defer-example5-md.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class DeferExample5Component {
  manualTrigger = signal(false);
  
  triggerManualLoad() {
    this.manualTrigger.set(true);
  }
}

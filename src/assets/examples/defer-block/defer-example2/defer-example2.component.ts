import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-defer-example2',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatCardModule],
    templateUrl: './defer-example2-md.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class DeferExample2Component {
  clickCount = signal(0);
  
  onButtonClick() {
    this.clickCount.update(count => count + 1);
  }
}

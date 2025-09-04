import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MarkdownComponent } from 'ngx-markdown';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-defer-example10',
    standalone: true,
    imports: [MatButtonModule, MatCardModule, MatTabsModule, MatProgressBarModule, MatSliderModule, MatFormFieldModule, MatInputModule, MarkdownComponent, RouterModule],
    templateUrl: './defer-example10.component.html',
    styleUrl: './defer-example10.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class DeferExample10Component {
  // These signals are used to demonstrate recommended timing values
  // Note: Defer block timing parameters must be static, not dynamic
  loadingDelay = signal(200);
  loadingMinimum = signal(1000);
  placeholderMinimum = signal(500);
}

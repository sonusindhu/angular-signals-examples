import { Component, signal, computed } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownComponent } from 'ngx-markdown';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { DecimalPipe } from '@angular/common';

const USD_TO_EUR = 0.92;
const EUR_TO_USD = 1 / USD_TO_EUR;

@Component({
  selector: 'app-example8',
  standalone: true,
  imports: [MatTabsModule, MatCardModule, MatIconModule, MarkdownComponent, RouterModule, MatButtonModule, DecimalPipe],
  templateUrl: './example8.component.html',
  styleUrl: './example8.component.scss'
})
export class Example8Component {
  private _dollar = signal(1);
  private _euro = signal(Number((1 * USD_TO_EUR).toFixed(2)));

  dollar = computed(() => this._dollar());
  euro = computed(() => this._euro());

  setDollar(val: number) {
    this._dollar.set(val);
    this._euro.set(Number((val * USD_TO_EUR).toFixed(2)));
  }

  setEuro(val: number) {
    this._euro.set(val);
    this._dollar.set(Number((val * EUR_TO_USD).toFixed(2)));
  }
}

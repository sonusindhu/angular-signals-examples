import { NgIf, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-signal-example9',
  standalone: true,
  templateUrl: './signal-example9.component.html',
  styleUrl: './signal-example9.component.scss',
  imports: [
    NgIf,
    NgFor,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class SignalExample9Component {
  price = signal<number>(0);
  vatInPercent = signal<number>(10);

  totalVat = computed<number>(() => this.price() * (this.vatInPercent() / 100));
  total = computed<number>(() => this.price() + this.totalVat());

  // listing
  listing = signal<any[]>([]);

  onInputUpdate(event: Event): void {
    const newValue = +(event.target as HTMLInputElement).value;
    this.price.set(newValue);
  }

  onInputVat(event: Event): void {
    const newValue = +(event.target as HTMLInputElement).value;
    this.vatInPercent.set(newValue);
  }

  save(): void {
    if (this.price() <= 0) return;

    this.listing.update((history: any[]) => {
      const item = {
        price: this.price(),
        vatPercent: this.vatInPercent(),
        vat: this.totalVat(),
        total: this.total(),
      };
      return [...history, item];
    });
  }
}

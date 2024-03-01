import { NgIf, NgFor, CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { products } from './products';

@Component({
  selector: 'app-signal-example10',
  standalone: true,
  templateUrl: './signal-example10.component.html',
  styleUrl: './signal-example10.component.scss',
  imports: [
    NgIf,
    NgFor,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    CurrencyPipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class SignalExample10Component {
  readonly firstPage = 1;
  itemsPerPage = 5;

  searchInput = signal('');
  currentPage = signal(this.firstPage);
  isNextPageNotAvailable = computed(() => {
    const fitlerProducts = products
      .filter((product) =>
        product.title.toLowerCase().includes(this.searchInput().toLowerCase())
      )
    return fitlerProducts.length < (this.currentPage()+1) * this.itemsPerPage;
  });

  filteredProducts = computed(() => {
    const startIndex = (this.currentPage() - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return products
      .filter((product) =>
        product.title.toLowerCase().includes(this.searchInput().toLowerCase())
      )
      .slice(startIndex, endIndex);
  });

  searchProduct(searchText: string): void {
    this.searchInput.set(searchText);
    if (this.currentPage() > this.firstPage) {
      this.currentPage.set(this.firstPage);
    }
  }

  goToPrevPage(): void {
    this.currentPage.update((currentPage) => Math.max(currentPage - 1, 1));
  }

  goToNextPage(): void {
    this.currentPage.update((currentPage) =>
      Math.min(currentPage + 1, this.itemsPerPage + 1)
    );
  }

}

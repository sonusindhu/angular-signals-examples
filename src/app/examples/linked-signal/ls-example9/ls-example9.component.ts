import { Component, signal, linkedSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownComponent } from 'ngx-markdown';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

interface Address {
  id: string;
  label: string;
}

const INITIAL_ADDRESSES: Address[] = [
  { id: 'home', label: 'Home' },
  { id: 'office', label: 'Office' },
  { id: 'parents', label: "Parents' House" },
];

@Component({
  selector: 'app-ls-example9',
  templateUrl: './ls-example9.component.html',
  styleUrl: './ls-example9.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MarkdownComponent,
    RouterModule,
    MatButtonModule
  ]
})
export class LsExample9Component {
  addresses = signal<Address[]>([...INITIAL_ADDRESSES]);
  lastUsedAddress = signal<string>('home');

  selectedAddress = linkedSignal({
    source: () => [this.addresses(), this.lastUsedAddress()] as [Address[], string],
    computation: ([addresses, lastUsed]: [Address[], string]) => {
      const found = addresses.find((a: Address) => a.id === lastUsed);
      return found ? found.id : (addresses[0]?.id ?? '');
    }
  });

  selectAddress(id: string) {
    this.selectedAddress.set(id);
    this.lastUsedAddress.set(id);
  }

  removeSelectedAddress() {
    const id = this.selectedAddress();
    this.addresses.set(this.addresses().filter(a => a.id !== id));
  }

  addRandomAddress() {
    const labels = ['Friend\'s Place', 'Warehouse', 'Gym', 'School', 'Cottage'];
    const id = 'addr' + Math.floor(Math.random() * 10000);
    const label = labels[Math.floor(Math.random() * labels.length)];
    this.addresses.set([...this.addresses(), { id, label }]);
  }
}

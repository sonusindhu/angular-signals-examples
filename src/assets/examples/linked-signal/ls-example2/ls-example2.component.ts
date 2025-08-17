import { CommonModule } from '@angular/common';
import { Component, signal, linkedSignal, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-ls-example2',
  standalone: true,
  templateUrl: './ls-example2.component.html',
  styleUrls: ['./ls-example2.component.scss'],
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatCardModule]
})
export class LsExample2Component {
  basePrice = model(100);
  quantity = model(1);
  taxRate = 0.18;

  // ✅ LinkedSignal with simplified syntax - automatically updates on dependency changes
  totalPrice = linkedSignal(() => {
    const subtotal = this.basePrice() * this.quantity();
    return subtotal * (1 + this.taxRate);
  });
}

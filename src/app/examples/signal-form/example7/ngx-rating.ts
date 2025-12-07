import { Component, model, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormValueControl } from '@angular/forms/signals';

@Component({
  selector: 'ngx-rating',
  imports: [FormsModule],
  template: `
    <div class="rating">
        <select style="border: 1px solid #ccc; padding: 4px;" [(ngModel)]="value">
            <option [value]="null">Select your rating</option>
            @for(rating of ratings; track rating) {
                <option [value]="rating">{{ rating }}</option>
            }
        </select>
    </div>
  `,
})
export class NgxRatingComponent implements FormValueControl<number | null> {

    // Define available ratings
    readonly ratings = [1, 2, 3, 4, 5];

    // Define the value model
    readonly value = model<number | null>(null);

    // Log value changes
    effect = effect(() => {
        console.log('Rating changed to:', this.value());
    });

}

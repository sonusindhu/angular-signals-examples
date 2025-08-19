```code
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { httpResource } from '@angular/common/http';

interface Country {
  name: { common: string };
  capital?: string[];
  region?: string;
  population?: number;
  flags?: { svg?: string };
}

@Component({
  selector: 'app-resource-api-example9',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatSelectModule, MatCardModule, MatIconModule],
  templateUrl: './resource-api-example9.component.html',
  styleUrls: ['./resource-api-example9.component.scss']
})
export class ResourceApiExample9Component {
  get countryData(): Country | null {
    const val = this.countryResource.value();
    return Array.isArray(val) && val.length > 0 ? val[0] as Country : null;
  }
  countries = signal<string[]>([
    'India', 'United States', 'Brazil', 'France', 'Japan', 'Australia', 'Canada', 'Germany', 'South Africa', 'China'
  ]);
  country = signal('India');

  countryResource = httpResource(() =>
    `https://restcountries.com/v3.1/name/${this.country()}?fullText=true`
  );

  updateCountry(event: any) {
    this.country.set(event.value);
  }
}
```

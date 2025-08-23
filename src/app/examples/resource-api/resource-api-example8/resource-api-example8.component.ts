import { Component, signal, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MarkdownComponent } from 'ngx-markdown';
import { CommonModule } from '@angular/common';
import { rxResource } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

interface CountryData {
  name: string;
  capital: string;
  region: string;
  population: number;
  flag: string;
}

@Component({
  selector: 'app-resource-api-example8',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatCardModule, MatIconModule, MatTabsModule, MarkdownComponent, RouterModule, MatButtonModule],
  templateUrl: './resource-api-example8.component.html',
  styleUrl: './resource-api-example8.component.scss'
})
export class ResourceApiExample8Component {
    http = inject(HttpClient);
  countries = signal(['India', 'United States', 'Brazil', 'Japan', 'Australia']);
  country = signal('India');


  countryResource = rxResource({
    params: () => this.country(),
    stream: ({ params }) =>
      this.http.get<any[]>(`https://restcountries.com/v3.1/name/${encodeURIComponent(params)}?fullText=true`).pipe(
        // Map to the first country result
        map(data => data[0])
      ),
  });

  updateCountry(event: MatSelectChange<any>) {
    this.country.set(event.value);
  }
}

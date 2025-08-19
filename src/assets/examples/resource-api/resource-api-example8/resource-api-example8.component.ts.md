```code
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

@Component({
  selector: 'app-resource-api-example8',
  templateUrl: './resource-api-example8.component.html',
  styleUrls: ['./resource-api-example8.component.scss'],
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatCardModule MatIconModule],
})
export class ResourceApiExample8Component {
  countries = signal<string[]>([
    'India', 'United States', 'Brazil', 'France', 'Japan', 'Australia', 'Canada', 'Germany', 'South Africa', 'China'
  ]);
  country = signal('India');

  countryResource = rxResource((country: string) =>
    this.http.get<any[]>(`https://restcountries.com/v3.1/name/${country}?fullText=true`).pipe(
      map((res) => res[0])
    ),
    { input: this.country }
  );

  constructor(private http: HttpClient) {}

  updateCountry(event: any) {
    this.country.set(event.value);
  }
}
```

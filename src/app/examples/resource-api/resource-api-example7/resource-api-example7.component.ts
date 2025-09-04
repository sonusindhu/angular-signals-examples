import { Component, signal, resource } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MarkdownComponent } from 'ngx-markdown';

import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

interface WeatherData {
  temp: number;
  humidity: number;
  condition: string;
}

@Component({
  selector: 'app-resource-api-example7',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatCardModule, MatTabsModule, MarkdownComponent, RouterModule, MatButtonModule],
  templateUrl: './resource-api-example7.component.html',
  styleUrl: './resource-api-example7.component.scss'
})
export class ResourceApiExample7Component {
  cities = signal(['London', 'New York', 'Tokyo', 'Sydney']);
  city = signal('London');

  weatherResource = resource({
    params: () => this.city(),
    loader: async (params) => {
      const city = params.params;
      // Fetch real weather data from wttr.in free API
      const url = `https://wttr.in/${encodeURIComponent(city)}?format=j1`;
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch weather');
      const json = await response.json();
      // Extract current condition
      const current = json.current_condition?.[0];
      if (!current) throw new Error('No weather data');
      return {
        temp: Number(current.temp_C),
        humidity: Number(current.humidity),
        condition: current.weatherDesc?.[0]?.value || 'Unknown'
      };
    }
  });

  updateCity(event: MatSelectChange<any>) {
    this.city.set(event.value);
  }
}

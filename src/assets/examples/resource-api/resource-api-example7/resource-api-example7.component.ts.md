```code
import { Component, signal, resource } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

interface WeatherData {
  temp: number;
  humidity: number;
  condition: string;
}

@Component({
  selector: 'app-resource-api-example7',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatCardModule],
  templateUrl: './resource-api-example7.component.html',
  styleUrl: './resource-api-example7.component.scss'
})
export class ResourceApiExample7Component {
  cities = signal(['London', 'New York', 'Tokyo', 'Sydney']);
  city = signal('London');


  weatherResource = resource<WeatherData, [string]>(this.city, async (city) => {
    // Simulate async API call with a delay
    await new Promise(res => setTimeout(res, 800));
    const data: Record<string, WeatherData> = {
      London: { temp: 18, humidity: 65, condition: 'Cloudy' },
      'New York': { temp: 25, humidity: 70, condition: 'Sunny' },
      Tokyo: { temp: 22, humidity: 60, condition: 'Rainy' },
      Sydney: { temp: 15, humidity: 55, condition: 'Windy' }
    };
    if (!data[city]) throw new Error('City not found');
    return data[city];
  });

  updateCity(event: MatSelectChange<any>) {
    this.city.set(event.value);
  }
}
// ...existing code...
```


```code
import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient, httpResource } from '@angular/common/http';
interface ResourceData {
    id: number;
    title: string;
    completed: boolean;
}
@Component({
  selector: 'app-resource-api-example3',
  imports: [MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './resource-api-example3.component.html',
  styleUrl: './resource-api-example3.component.scss'
})
export class ResourceApiExample3Component {
  params = signal({
    _limit: 10,
    _start: 0
  });

  http = inject(HttpClient);
  httpResourcesSignal = httpResource<ResourceData[]>(() => {
    return `https://jsonplaceholder.typicode.com/todos?_limit=${this.params()._limit}&_start=${this.params()._start}`;
  }, { defaultValue: [] });

  previousPage() {
    const currentStart = this.params()._start;
    if (currentStart > 0) {
      this.params.set({ ...this.params(), _start: Math.max(0, currentStart - this.params()._limit) });
      this.httpResourcesSignal.reload();
    }
  }

  nextPage() {
    const currentStart = this.params()._start;
    if (currentStart >= 0) {
      // Assuming the API supports pagination, we can just increment the start index
      this.params.set({ ...this.params(), _start: currentStart + this.params()._limit });
      this.httpResourcesSignal.reload();
    }
  }
}



import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, httpResource } from '@angular/common/http';
interface ResourceData {
    id: number;
    title: string;
    completed: boolean;
}
@Component({
  selector: 'app-resource-api-example3',
  imports: [MatButtonModule],
  template: `
    <h2>Resource API Example 3: List Resources (httpResource)</h2>


    <button mat-button color="primary" (click)="httpResourcesSignal.reload()">ReLoad</button>

    <button mat-button color="accent" [disabled]="params()._start === 0" (click)="previousPage()">Previous</button>
    <button mat-button color="accent" (click)="nextPage()">Next</button>

    @if (httpResourcesSignal.isLoading()) {
      <div>Loading...</div>
    }
    @else if(httpResourcesSignal.error()) {
      <div>Error: {{ httpResourcesSignal.error() }}</div>
    }
    @else {
        <table width="100%">
          <thead>
            <tr>
              <th>ID</th>
              <th>Task</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            @let data = httpResourcesSignal.value();
            @if(data) {
              @for (r of data; track r.id) {
                <tr>
                  <td>{{ r.id }}</td>
                  <td>{{ r.title }}</td>
                  <td>{{ r.completed ? 'Completed' : 'Pending' }}</td>
                </tr>
              }
            }
          </tbody>
        </table>
    }
  `
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

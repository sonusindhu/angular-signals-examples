

import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { of, single } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';

interface ResourceData {
    id: number;
    title: string;
    completed: boolean;
}
@Component({
  selector: 'app-resource-api-example2',
  imports: [MatButtonModule],
  template: `
    <h2>Resource API Example 2: List Resources (rxResource)</h2>
    

    <button mat-button color="primary" (click)="rxResourcesSignal.reload()">ReLoad</button>

    <button mat-button color="accent" [disabled]="params()._start === 0" (click)="previousPage()">Previous</button>
    <button mat-button color="accent" (click)="nextPage()">Next</button>

    @if (rxResourcesSignal.isLoading()) {
      <div>Loading...</div>
    }
    @else if(rxResourcesSignal.error()) {
      <div>Error: {{ rxResourcesSignal.error() }}</div>
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
            @let data = rxResourcesSignal.value();
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
export class ResourceApiExample2Component {
  params = signal({
    _limit: 10,
    _start: 0
  });

  http = inject(HttpClient);
  rxResourcesSignal = rxResource({
    params: () => this.params(),
    stream: ({ params }) =>
      this.http.get<ResourceData[]>(`https://jsonplaceholder.typicode.com/todos?_limit=${params._limit}&_start=${params._start}`
      ),
  });

  previousPage() {
    const currentStart = this.params()._start;
    if (currentStart > 0) {
      this.params.set({ ...this.params(), _start: Math.max(0, currentStart - this.params()._limit) });
      this.rxResourcesSignal.reload();
    }
  }

  nextPage() {
    const currentStart = this.params()._start;
    if (currentStart >= 0) {
      // Assuming the API supports pagination, we can just increment the start index
      this.params.set({ ...this.params(), _start: currentStart + this.params()._limit });
      this.rxResourcesSignal.reload();
    }
  }
}

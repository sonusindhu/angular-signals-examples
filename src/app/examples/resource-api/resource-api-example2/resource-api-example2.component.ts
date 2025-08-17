

import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownComponent } from 'ngx-markdown';
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
  imports: [MatButtonModule, MatTabsModule, MatCardModule, MatIconModule, MarkdownComponent],
  templateUrl: './resource-api-example2.component.html',
  styleUrl: './resource-api-example2.component.scss'
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

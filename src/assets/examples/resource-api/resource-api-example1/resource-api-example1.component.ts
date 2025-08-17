
import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownComponent } from 'ngx-markdown';
import { resource } from '@angular/core';
interface ResourceData {
    id: number;
    title: string;
    completed: boolean;
}
function fetchResourceApi(limit = 10): Promise<ResourceData[] | null> {
  return fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
    .then(response => response.json())
    .catch(() => []);
}

@Component({
  selector: 'app-resource-api-example1',
  imports: [MatButtonModule, MatTabsModule, MatCardModule, MatIconModule, MarkdownComponent],
  templateUrl: './resource-api-example1.component.html',
  styleUrl: './resource-api-example1.component.scss'
})
export class ResourceApiExample1Component {
    limit = signal(10);
    resourceSignal = resource({ 
        params: () => this.limit(),
        loader: () => fetchResourceApi(this.limit()), 
        defaultValue: []
    });
}

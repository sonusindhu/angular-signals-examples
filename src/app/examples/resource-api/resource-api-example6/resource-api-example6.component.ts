import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { httpResource } from '@angular/common/http';

@Component({
  selector: 'app-resource-api-example6',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>httpResource Example 6: Fetch a Random Joke</h2>
    <button (click)="jokeSignal.reload()">reload Joke</button>
    <div *ngIf="jokeSignal.isLoading()">Loading...</div>
    <div *ngIf="jokeSignal.error()">Error: {{ jokeSignal.error()?.message }}</div>
    <div *ngIf="jokeSignal.value() as joke">
      <pre>{{ joke | json }}</pre>
    </div>
  `
})

export class ResourceApiExample6Component {
  jokeSignal = httpResource(() => "https://api.chucknorris.io/jokes/random");
}

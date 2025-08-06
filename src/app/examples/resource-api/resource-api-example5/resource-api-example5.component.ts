import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { rxResource } from '@angular/core/rxjs-interop';
import { of, from } from 'rxjs';

function fetchGithubRepos() {
  return from(
    fetch('https://api.github.com/users/angular/repos')
      .then(res => res.json())
      .catch(() => [])
  );
}

@Component({
  selector: 'app-resource-api-example5',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>rxResource Example 5: List Angular GitHub Repos</h2>
    <button (click)="reposSignal.reload()">Reload</button>
    <div *ngIf="reposSignal.isLoading()">Loading...</div>
    <div *ngIf="reposSignal.error()">Error: {{ reposSignal.error() }}</div>
    <ul *ngIf="reposSignal.value() as repos">
      <li *ngFor="let repo of repos; let index = index">
        {{ index + 1 }}. <a [href]="repo.html_url" target="_blank">{{ repo.name }}</a>
      </li>
    </ul>
  `
})
export class ResourceApiExample5Component {
  reposSignal = rxResource({ stream: fetchGithubRepos, defaultValue: [] });
}

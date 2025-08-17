import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownComponent } from 'ngx-markdown';
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
  imports: [CommonModule, MatButtonModule, MatTabsModule, MatCardModule, MatIconModule, MarkdownComponent],
  templateUrl: './resource-api-example5.component.html',
  styleUrl: './resource-api-example5.component.scss'
})
export class ResourceApiExample5Component {
  reposSignal = rxResource({ stream: fetchGithubRepos, defaultValue: [] });
}

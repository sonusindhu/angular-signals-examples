```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
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
  imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './resource-api-example5.component.html',
  styleUrl: './resource-api-example5.component.scss'
})
export class ResourceApiExample5Component {
  reposSignal = rxResource({ stream: fetchGithubRepos, defaultValue: [] });
}
```
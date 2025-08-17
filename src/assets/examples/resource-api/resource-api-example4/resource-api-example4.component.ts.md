```typescript
import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownComponent } from 'ngx-markdown';
import { resource } from '@angular/core';

interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
  html_url: string;
}

function getRandomUserId(): number {
  const userIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 583231, 872296, 1024025, 2225737, 3518823];
  return userIds[Math.floor(Math.random() * userIds.length)];
}

async function fetchGitHubUser(): Promise<GitHubUser> {
  const userId = getRandomUserId();
  const response = await fetch(`https://api.github.com/user/${userId}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch user');
  }
  
  return response.json();
}

@Component({
  selector: 'app-resource-api-example4',
  imports: [CommonModule, MatButtonModule, MatTabsModule, MatCardModule, MatIconModule, MarkdownComponent],
  templateUrl: './resource-api-example4.component.html',
  styleUrl: './resource-api-example4.component.scss'
})
export class ResourceApiExample4Component {
  userSignal = resource({
    loader: fetchGitHubUser,
    defaultValue: null as GitHubUser | null
  });

  copyUsername(username: string) {
    navigator.clipboard.writeText(username);
  }
}
```

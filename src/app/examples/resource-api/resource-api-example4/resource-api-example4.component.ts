import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownComponent } from 'ngx-markdown';
import { resource } from '@angular/core';

function fetchRandomUser(): Promise<any> {
  // Get a random user ID between 1 and 100000 (GitHub user IDs)
  const randomId = Math.floor(Math.random() * 100000) + 1;
  return fetch(`https://api.github.com/user/${randomId}`)
    .then(res => res.json())
    .then((user: any) => {
      // If user doesn't exist, try another random one
      if (user.message === 'Not Found') {
        return fetchRandomUser();
      }
      return user;
    })
    .catch(() => null);
}

@Component({
  selector: 'app-resource-api-example4',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatTabsModule, MatCardModule, MatIconModule, MarkdownComponent],
  templateUrl: './resource-api-example4.component.html',
  styleUrl: './resource-api-example4.component.scss'
})
export class ResourceApiExample4Component {
  userSignal = resource({ loader: fetchRandomUser, defaultValue: null });

  copyUsername(username: string | undefined) {
    if (username) {
      navigator.clipboard.writeText(username).then(() => {
        // You could add a toast notification here if needed
        console.log('Username copied to clipboard:', username);
      }).catch(err => {
        console.error('Failed to copy username:', err);
      });
    }
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownComponent } from 'ngx-markdown';
import { resource } from '@angular/core';

function fetchRandomUser() {
  return fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => data.results[0])
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
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  imports: [CommonModule],
  template: `
    <h2>Resource Example 4: Fetch Random User (resource)</h2>
    <button (click)="userSignal.reload()">Fetch Random User</button>
    <div *ngIf="userSignal.isLoading()">Loading...</div>
    <div *ngIf="userSignal.error()">Error: {{ userSignal.error()?.message }}</div>
    <div *ngIf="userSignal.value() as user">
      <pre>{{ user | json }}</pre>
      <img *ngIf="user?.picture?.large" [src]="user.picture.large" alt="User" />
    </div>
  `
})
export class ResourceApiExample4Component {
  userSignal = resource({ loader: fetchRandomUser, defaultValue: null });
}

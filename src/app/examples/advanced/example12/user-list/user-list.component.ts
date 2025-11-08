import { Component, signal } from '@angular/core';
import { PreloadService } from '../../../../core/preloading/preload.service';

import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MarkdownModule } from 'ngx-markdown';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface User {
  id: number;
  name: string;
  email: string;
}

const DUMMY_USERS: User[] = [
  { id: 10001, name: 'Alice', email: 'alice@example.com' },
  { id: 10002, name: 'Bob', email: 'bob@example.com' },
  { id: 10003, name: 'Charlie', email: 'charlie@example.com' },
];

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  imports: [RouterModule, MatTabsModule, MarkdownModule, MatButtonModule, MatIconModule],
})
export class UserListComponent {
  users = signal(DUMMY_USERS);
  constructor(private preloadService: PreloadService) {}

  preloadUserForm() {
    this.preloadService.preload('user-form');
  }
}

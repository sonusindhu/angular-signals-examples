import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownComponent } from 'ngx-markdown';
import { httpResource } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-resource-api-example6',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatTabsModule, MatCardModule, MatIconModule, MarkdownComponent, RouterModule],
  templateUrl: './resource-api-example6.component.html',
  styleUrl: './resource-api-example6.component.scss'
})

export class ResourceApiExample6Component {
  jokeSignal = httpResource(() => "https://api.chucknorris.io/jokes/random");
}

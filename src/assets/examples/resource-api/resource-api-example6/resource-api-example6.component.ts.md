```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { httpResource } from '@angular/common/http';

@Component({
  selector: 'app-resource-api-example6',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './resource-api-example6.component.html',
  styleUrl: './resource-api-example6.component.scss'
})

export class ResourceApiExample6Component {
  jokeSignal = httpResource(() => "https://api.chucknorris.io/jokes/random");
}
```
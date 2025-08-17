# Resource API Example 6: TypeScript Component

```typescript
import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-resource-api-example6',
  imports: [MatButtonModule, MatTabsModule, MatCardModule, MatIconModule, MarkdownComponent],
  templateUrl: './resource-api-example6.component.html',
  styleUrl: './resource-api-example6.component.scss'
})
export class ResourceApiExample6Component {
  // Component implementation for httpResource with HTTP Client
  // Demonstrates HTTP-specific operations
}
```

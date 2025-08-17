# Resource API Example 5: TypeScript Component

```typescript
import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-resource-api-example5',
  imports: [MatButtonModule, MatTabsModule, MatCardModule, MatIconModule, MarkdownComponent],
  templateUrl: './resource-api-example5.component.html',
  styleUrl: './resource-api-example5.component.scss'
})
export class ResourceApiExample5Component {
  // Component implementation for rxResource Integration
  // Demonstrates Observable integration
}
```

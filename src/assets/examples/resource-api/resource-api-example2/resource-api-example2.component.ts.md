# Resource API Example 2: TypeScript Component

```typescript
import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-resource-api-example2',
  imports: [MatButtonModule, MatTabsModule, MatCardModule, MatIconModule, MarkdownComponent],
  templateUrl: './resource-api-example2.component.html',
  styleUrl: './resource-api-example2.component.scss'
})
export class ResourceApiExample2Component {
  // Component implementation for Reactive Parameters
  // Demonstrates rxResource
}
```

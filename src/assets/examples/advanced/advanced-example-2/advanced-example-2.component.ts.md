```typescript
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvancedExample2Service } from './advanced-example-2.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-advanced-example-2',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './advanced-example-2.component.html',
  styleUrls: ['./advanced-example-2.component.scss']
})
export class AdvancedExample2Component {
  private service = inject(AdvancedExample2Service);
  users$ = this.service.getUsers();
}
```

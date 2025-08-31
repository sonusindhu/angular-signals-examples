```markdown
```typescript
import { Component } from '@angular/core';
import { CollaborativeListService } from '../../../shared/collaborative-list.service';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { JsonPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-advanced-example10',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, JsonPipe, CommonModule, FormsModule],
  templateUrl: './advanced-example10.component.html',
  styleUrl: './advanced-example10.component.scss'
})
export class AdvancedExample10Component {
  list = this.collabService.list;
  newItem = '';

  constructor(private collabService: CollaborativeListService) {}

  add() {
    if (this.newItem.trim()) {
      this.collabService.addItem(this.newItem.trim());
      this.newItem = '';
    }
  }

  remove(index: number) {
    this.collabService.removeItem(index);
  }

  edit(index: number, value: string) {
    this.collabService.editItem(index, value);
  }

  clear() {
    this.collabService.clear();
  }
}
```
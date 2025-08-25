```typescript
import { Component } from '@angular/core';
import { NgsTableComponent, NgsTableColumnConfig } from '../../../ngs-table/ngs-table.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-ngs-table-example1',
  standalone: true,
  imports: [NgsTableComponent, MatTabsModule, MarkdownModule],
  templateUrl: './example1.component.html',
  styleUrl: './example1.component.scss',
})
export class NgsTableExample1Component {
  columnsConfig: NgsTableColumnConfig[] = [
    { key: 'name', label: 'Name', filterable: true },
    { key: 'age', label: 'Age', filterable: true },
    { key: 'city', label: 'City', filterable: true },
  ];
  data = [
    { name: 'Alice', age: 30, city: 'New York' },
    { name: 'Bob', age: 25, city: 'London' },
    { name: 'Charlie', age: 35, city: 'Paris' },
  ];
}
```

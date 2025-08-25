import { Component } from '@angular/core';
import { NgsTableComponent, NgsTableColumnConfig } from '../../../ngs-table/ngs-table.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MarkdownModule } from 'ngx-markdown';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-ngs-table-example1',
  standalone: true,
  imports: [NgsTableComponent, MatTabsModule, MarkdownModule, RouterModule, MatButtonModule],
  templateUrl: './example1.component.html',
  styleUrl: './example1.component.scss',
})
export class NgsTableExample1Component {
  columnsConfig: NgsTableColumnConfig[] = [
    { key: 'name', label: 'Name', filterable: false },
    { key: 'age', label: 'Age', filterable: false },
    { key: 'city', label: 'City', filterable: false },
  ];
  data = [
    { name: 'Alice', age: 30, city: 'New York' },
    { name: 'Bob', age: 25, city: 'London' },
    { name: 'Charlie', age: 35, city: 'Paris' },
  ];
}

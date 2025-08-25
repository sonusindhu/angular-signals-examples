import { Component } from '@angular/core';
import { NgsTableComponent, NgsTableColumnConfig } from '../../../ngs-table/ngs-table.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MarkdownModule } from 'ngx-markdown';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-ngs-table-example2',
  standalone: true,
  imports: [NgsTableComponent, MatTabsModule, MarkdownModule, RouterModule, MatButtonModule, MatIconModule],
  templateUrl: './example2.component.html',
  styleUrl: './example2.component.scss',
})
export class NgsTableExample2Component {
  columnsConfig: NgsTableColumnConfig[] = [
    { key: 'id', label: 'ID', filterable: true, sortable: true },
    { key: 'name', label: 'Name', filterable: true, sortable: true },
    { key: 'age', label: 'Age', filterable: true, sortable: true },
    { key: 'city', label: 'City', filterable: true },
    { key: 'actions', label: 'Actions' }
  ];
  data = [
    { id: 1, name: 'Alice', age: 30, city: 'New York' },
    { id: 2, name: 'Bob', age: 25, city: 'London' },
    { id: 3, name: 'Charlie', age: 35, city: 'Paris' },
    { id: 4, name: 'Diana', age: 28, city: 'Berlin' },
    { id: 5, name: 'Eve', age: 32, city: 'Tokyo' }
  ];

  editRow(row: any) {
    // Implement edit logic here
    alert('Edit: ' + JSON.stringify(row));
  }
  deleteRow(row: any) {
    // Implement delete logic here
    alert('Delete: ' + JSON.stringify(row));
  }
}

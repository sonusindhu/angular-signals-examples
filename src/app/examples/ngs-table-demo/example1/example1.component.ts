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
    { key: 'name', label: 'Name', filterable: true },
    { key: 'age', label: 'Age', filterable: true },
    { key: 'city', label: 'City', filterable: true },
  ];
  data = [
    { name: 'Alice', age: 30, city: 'New York' },
    { name: 'Bob', age: 25, city: 'London' },
    { name: 'Charlie', age: 35, city: 'Paris' },
  ];

  htmlCode = [
    '```html',
    '<div class="content-area">',
    '  <h2>ngs-table Example 1: Simple Table</h2>',
    '  <p>This example demonstrates a basic usage of ngs-table with selection and column chooser.</p>',
    '  <mat-tab-group>',
    '    <mat-tab label="Demo">',
    '      <div class="demo-section">',
    '        <ngs-table',
    '          [columnsConfig]="columnsConfig"',
    '          [data]="data"',
    '          [showSelection]="true"',
    '          [showColumnChooser]="true"',
    '        ></ngs-table>',
    '      </div>',
    '    </mat-tab>',
    '    <mat-tab label="HTML">',
    '      <pre><code [innerText]="htmlCode"></code></pre>',
    '    </mat-tab>',
    '    <mat-tab label="TypeScript">',
    '      <pre><code [innerText]="tsCode"></code></pre>',
    '    </mat-tab>',
    '    <mat-tab label="SCSS">',
    '      <pre><code [innerText]="scssCode"></code></pre>',
    '    </mat-tab>',
    '  </mat-tab-group>',
    '</div>',
    '```'
  ].join('\n');

  tsCode = [
    '```typescript',
    "import { Component } from '@angular/core';",
    "import { NgsTableComponent, NgsTableColumnConfig } from '../../../ngs-table/ngs-table.component';",
    "import { MatTabsModule } from '@angular/material/tabs';",
    "import { MarkdownModule } from 'ngx-markdown';",
    "import { RouterModule } from '@angular/router';",
    "import { MatButtonModule } from '@angular/material/button';",
    '',
    '@Component({',
    "  selector: 'app-ngs-table-example1',",
    '  standalone: true,',
    '  imports: [NgsTableComponent, MatTabsModule, MarkdownModule, RouterModule, MatButtonModule],',
    "  templateUrl: './example1.component.html',",
    "  styleUrl: './example1.component.scss',",
    '})',
    'export class NgsTableExample1Component {',
    '  columnsConfig: NgsTableColumnConfig[] = [',
    "    { key: 'name', label: 'Name', filterable: true },",
    "    { key: 'age', label: 'Age', filterable: true },",
    "    { key: 'city', label: 'City', filterable: true },",
    '  ];',
    '  data = [',
    "    { name: 'Alice', age: 30, city: 'New York' },",
    "    { name: 'Bob', age: 25, city: 'London' },",
    "    { name: 'Charlie', age: 35, city: 'Paris' },",
    '  ];',
    '}',
    '```'
  ].join('\n');

  scssCode = [
    '```scss',
    '.content-area {',
    '  max-width: 900px;',
    '  margin: 0 auto;',
    '  padding: 2rem 1rem;',
    '}',
    '.demo-section {',
    '  margin-top: 2rem;',
    '  background: #fff;',
    '  border-radius: 8px;',
    '  box-shadow: 0 2px 8px rgba(0,0,0,0.04);',
    '  padding: 2rem 1rem;',
    '}',
    '```'
  ].join('\n');
}

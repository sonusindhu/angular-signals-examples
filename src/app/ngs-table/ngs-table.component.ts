import { Component, Signal, computed, signal, effect, input, output, ViewChild, AfterViewInit, TemplateRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { CdkDropList, CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';

export interface NgsTableColumnConfig {
  key: string;
  label: string;
  filterable?: boolean;
  sortable?: boolean;
  type?: 'text' | 'number' | 'date' | 'custom';
}

@Component({
  selector: 'ngs-table',
  templateUrl: './ngs-table.component.html',
  styleUrl: './ngs-table.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    DragDropModule
  ],
})
export class NgsTableComponent<T = any> implements AfterViewInit {
  columnsConfig = input<NgsTableColumnConfig[]>([]);
  data = input<T[]>([]);
  dataSignal = input<Signal<T[]> | undefined>(undefined);
  showSelection = input(false);
  showColumnChooser = input(false);
  showActions = input(false);
  edit = output<T>();
  delete = output<T>();
  selectionChange = output<T[]>();

  dataSource = signal(new MatTableDataSource<T>([]));
  filterValues = signal<{ [key: string]: string }>({});
  selection = new SelectionModel<T>(true, []);
  hiddenColumns = signal<string[]>([]);
  cellTemplates = input<Record<string, TemplateRef<any>> | undefined>(undefined);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  pageSizeOptions = [5, 10, 20];

  get displayedColumns() {
    const cols = this.columnsConfig().filter(col => !this.hiddenColumns().includes(col.key)).map(col => col.key);
    return this.showSelection() ? ['select', ...cols] : cols;
  }

  get tableColumns(): string[] {
    return this.showActions() ? [...this.displayedColumns, 'actions'] : this.displayedColumns;
  }

  ngOnInit() {
    if (this.dataSignal()) {
      effect(() => {
        const d = this.dataSignal()!();
        this.dataSource().data = d;
      });
    } else {
      this.dataSource().data = this.data();
    }
    this.initFilterValues();
    this.dataSource().filterPredicate = this.filterPredicate;
  }

  ngAfterViewInit() {
    this.dataSource().paginator = this.paginator;
    this.dataSource().sort = this.sort;
  }

  drop(event: CdkDragDrop<string[]>) {
    const cols = this.columnsConfig();
    moveItemInArray(cols, event.previousIndex, event.currentIndex);
    // If columnsConfig is an input signal, reassign to trigger change detection
    if ('set' in this.columnsConfig) {
      (this.columnsConfig as any).set([...cols]);
    }
  }

  initFilterValues() {
    const obj: any = {};
    this.columnsConfig().forEach((col: NgsTableColumnConfig) => obj[col.key] = '');
    this.filterValues.set(obj);
  }

  applyFilter(event: Event, key: string) {
    const value = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.filterValues.set({ ...this.filterValues(), [key]: value });
    this.dataSource().filter = JSON.stringify(this.filterValues());
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource().data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
    } else {
      this.selection.select(...this.dataSource().data);
    }
    this.selectionChange.emit(this.selection.selected);
  }

  toggleRow(row: T) {
    this.selection.toggle(row);
    this.selectionChange.emit(this.selection.selected);
  }

  toggleColumn(colKey: string) {
    const hidden = this.hiddenColumns();
    if (!hidden.includes(colKey)) {
      this.hiddenColumns.set([...hidden, colKey]);
    } else {
      this.hiddenColumns.set(hidden.filter(c => c !== colKey));
    }
  }

  isFilterable(colKey: string): boolean {
    if (!colKey) return false;
    return !!this.columnsConfig().find(c => c.key === colKey)?.filterable;
  }

  filterPredicate = (data: T, filter: string) => {
    const searchTerms = JSON.parse(filter);
    return Object.keys(searchTerms).every(key => {
      if (!searchTerms[key]) return true;
      return ((data as any)[key] + '').toLowerCase().includes(searchTerms[key]);
    });
  };
}

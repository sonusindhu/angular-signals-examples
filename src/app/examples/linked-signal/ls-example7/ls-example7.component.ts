import { Component, signal, linkedSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MarkdownComponent } from 'ngx-markdown';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

interface DataSource {
  key: string;
  label: string;
  getDefaultRange: () => { start: string; end: string };
}

function getToday() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}
function getFirstDayOfMonth(date = new Date()) {
  return new Date(date.getFullYear(), date.getMonth(), 1).toISOString().slice(0, 10);
}
function getLastDayOfMonth(date = new Date()) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).toISOString().slice(0, 10);
}
function getFirstDayOfYear(date = new Date()) {
  return new Date(date.getFullYear(), 0, 1).toISOString().slice(0, 10);
}
function getLastDayOfYear(date = new Date()) {
  return new Date(date.getFullYear(), 11, 31).toISOString().slice(0, 10);
}
function getFirstDayOfQuarter(date = new Date()) {
  const quarter = Math.floor(date.getMonth() / 3);
  return new Date(date.getFullYear(), quarter * 3, 1).toISOString().slice(0, 10);
}
function getLastDayOfQuarter(date = new Date()) {
  const quarter = Math.floor(date.getMonth() / 3);
  return new Date(date.getFullYear(), quarter * 3 + 3, 0).toISOString().slice(0, 10);
}

const DATA_SOURCES: DataSource[] = [
  {
    key: 'lastMonth',
    label: 'Last Month',
    getDefaultRange: () => {
      const now = new Date();
      const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
      return {
        start: getFirstDayOfMonth(lastMonth),
        end: getLastDayOfMonth(lastMonth),
      };
    },
  },
  {
    key: 'thisQuarter',
    label: 'This Quarter',
    getDefaultRange: () => {
      const now = new Date();
      return {
        start: getFirstDayOfQuarter(now),
        end: getLastDayOfQuarter(now),
      };
    },
  },
  {
    key: 'thisYear',
    label: 'This Year',
    getDefaultRange: () => {
      const now = new Date();
      return {
        start: getFirstDayOfYear(now),
        end: getLastDayOfYear(now),
      };
    },
  },
];

@Component({
  selector: 'app-ls-example7',
  templateUrl: './ls-example7.component.html',
  styleUrl: './ls-example7.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MarkdownComponent,
    RouterModule,
    MatButtonModule
  ]
})
export class LsExample7Component {
  dataSources = DATA_SOURCES;
  dataSource = signal('lastMonth');

  dateRange = linkedSignal({
    source: () => this.dataSource(),
    computation: (srcKey) => {
      const src = DATA_SOURCES.find(s => s.key === srcKey);
      return src ? src.getDefaultRange() : { start: getToday(), end: getToday() };
    }
  });

  setDataSource(val: string) {
    this.dataSource.set(val);
    // dateRange auto-resets via linkedSignal
  }

  setStartDate(val: string) {
    this.dateRange.set({ ...this.dateRange(), start: val });
  }
  setEndDate(val: string) {
    this.dateRange.set({ ...this.dateRange(), end: val });
  }
}

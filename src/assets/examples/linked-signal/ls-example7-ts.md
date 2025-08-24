```typescript
import { Component, signal, linkedSignal } from '@angular/core';

interface DataSource {
  key: string;
  label: string;
  getDefaultRange: () => { start: string; end: string };
}

// ...date helpers omitted for brevity...

const DATA_SOURCES: DataSource[] = [
  {
    key: 'lastMonth',
    label: 'Last Month',
    getDefaultRange: () => ({ /* ... */ }),
  },
  {
    key: 'thisQuarter',
    label: 'This Quarter',
    getDefaultRange: () => ({ /* ... */ }),
  },
  {
    key: 'thisYear',
    label: 'This Year',
    getDefaultRange: () => ({ /* ... */ }),
  },
];

@Component({
  selector: 'app-ls-example7',
  // ...
})
export class LsExample7Component {
  dataSources = DATA_SOURCES;
  dataSource = signal('lastMonth');

  dateRange = linkedSignal({
    source: () => this.dataSource(),
    computation: (srcKey) => {
      const src = DATA_SOURCES.find(s => s.key === srcKey);
      return src ? src.getDefaultRange() : { start: '', end: '' };
    }
  });

  setDataSource(val: string) {
    this.dataSource.set(val);
  }
  setStartDate(val: string) {
    this.dateRange.set({ ...this.dateRange(), start: val });
  }
  setEndDate(val: string) {
    this.dateRange.set({ ...this.dateRange(), end: val });
  }
}
```

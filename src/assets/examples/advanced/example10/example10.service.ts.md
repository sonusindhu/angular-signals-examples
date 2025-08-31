```typescript
import { Injectable, signal } from '@angular/core';
import { fromEvent } from 'rxjs';

const STORAGE_KEY = 'collab-list';

@Injectable({ providedIn: 'root' })
export class CollaborativeListService {
  private _list = signal<string[]>(this.loadList());

  readonly list = this._list.asReadonly();

  constructor() {
    fromEvent<StorageEvent>(window, 'storage').subscribe(event => {
      if (event.key === STORAGE_KEY) {
        const updatedList = event.newValue ? JSON.parse(event.newValue) : [];
        this._list.set(updatedList);
      }
    });
  }

  private loadList(): string[] {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  private saveList(list: string[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }

  addItem(item: string) {
    const updated = [...this._list(), item];
    this._list.set(updated);
    this.saveList(updated);
  }

  removeItem(index: number) {
    const updated = this._list().filter((_, i) => i !== index);
    this._list.set(updated);
    this.saveList(updated);
  }

  editItem(index: number, newValue: string) {
    const updated = this._list().map((item, i) => i === index ? newValue : item);
    this._list.set(updated);
    this.saveList(updated);
  }

  clear() {
    this._list.set([]);
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
  }
}
```

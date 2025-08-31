```typescript
import { Injectable, linkedSignal, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, fromEvent, map } from 'rxjs';

const STORAGE_KEY = 'collab-list';

@Injectable({ providedIn: 'root' })
export class CollaborativeListService {

private listSignal = toSignal(
    fromEvent<StorageEvent>(window, 'storage').pipe(
        filter(event => event.key === STORAGE_KEY),
        map((event) => (event.newValue ? JSON.parse(event.newValue) : []) as string[])
    ),
    { initialValue: [] as string[] }
)

  private _list = linkedSignal({
    source: () => this.listSignal(),
    computation: (list) => list?.length ? list : this.loadList()
  });

  readonly list = this._list.asReadonly();

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
    localStorage.removeItem('collab-list');
  }
}
```

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AdvancedExample2Service {
  private users$!: Observable<any[]>;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    if (!this.users$) {
      this.users$ = this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
        .pipe(shareReplay(1));
    }
    return this.users$;
  }
}

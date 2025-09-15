import { PreloadingStrategy, Route } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CustomPreloadingStrategy implements PreloadingStrategy {
  private preloadTriggers: { [key: string]: Subject<void> } = {};

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    console.log('CustomPreloadingStrategy: Checking route', route.data, route.path);
    if (route.data && route.data['preloadOnDemand']) {
      if (!this.preloadTriggers[route.path!]) {
        this.preloadTriggers[route.path!] = new Subject<void>();
      }
      return this.preloadTriggers[route.path!].asObservable().pipe(
        // When triggered, start loading
        switchMap(() => load())
      );
    }
    // Default: do not preload
    return new Observable<any>();
  }

  triggerPreload(path: string) {
    if (this.preloadTriggers[path]) {
      this.preloadTriggers[path].next();
    }
  }
}

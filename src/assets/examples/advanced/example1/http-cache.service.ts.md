```typescript
import { Injectable } from "@angular/core";
import { HttpResponse } from "@angular/common/http";
import { timer } from "rxjs";
import { EXPIRE_CACHE_INTERVAL, HttpCacheEntry } from "./http-cache.model";

@Injectable({
  providedIn: "root"
})
export class HttpCacheService {
  private cache = new Map<string, HttpCacheEntry>();

  constructor() {
    // run cleanup immediately and every EXPIRE_CACHE_INTERVAL minutes
    timer(EXPIRE_CACHE_INTERVAL).subscribe(() => this.cleanup());
  }

  get(key: string): HttpResponse<unknown> | null {
    const entry = this.cache.get(key);
    if (!entry) return null;

    if (Date.now() > entry.expiry) {
      this.cache.delete(key);
      return null;
    }

    return entry.response.clone();
  }

  set(key: string, response: HttpResponse<unknown>, ttl: number): void {
    this.cache.set(key, {
      response: response.clone(),
      expiry: Date.now() + ttl
    });
  }

  clear(key?: string): void {
    if (key) {
      this.cache.delete(key);
    } else {
      this.cache.clear();
    }
  }

  private cleanup(): void {
    const now = Date.now();
    for (const [key, entry] of this.cache.entries()) {
      if (entry.expiry <= now) {
        this.cache.delete(key);
      }
    }
  }
}

import { HttpEvent, HttpHandlerFn, HttpRequest, HttpResponse } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable, of, tap } from "rxjs";
import { HttpCacheService } from "./http-cache.service";
import { CACHING_CONFIG, DEFAULT_CACHING_TTL } from "./http-cache.model";

export function httpCacheInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  
  const cacheService = inject(HttpCacheService);
  const config = req.context.get(CACHING_CONFIG);

  // Only cache GET requests
  if (req.method === "GET" && config?.enabled) {
    const cacheKey = config.key ?? req.urlWithParams;
    const cachedResponse = cacheService.get(cacheKey);

    if (cachedResponse) {
      console.log(`Cache hit for ${cacheKey}`);
      return of(cachedResponse);
    }

    return next(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          const ttl = config.maxAge ?? DEFAULT_CACHING_TTL;
          cacheService.set(cacheKey, event, ttl);
        }
      })
    );
  }

  console.log(`fetching from network`);
  return next(req);
}

/**
 * Intercepts HTTP requests and responses to add caching behavior.
 * This interceptor checks if caching is enabled for the request,
 * retrieves cached responses if available, and stores new responses in the cache.
 *
 * Example usage:
 * 
 * const data$ = this.http.get('/sensitive/data', {
 *   context: new HttpContext().set(CACHING_CONFIG, {
 *     enabled: true,
 *     key: 'sensitive-data',
 *     maxAge: 300000 // 5 minutes
 *   }),
 * });
 */
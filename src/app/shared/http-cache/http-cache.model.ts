import { HttpContextToken } from "@angular/common/http";
import { HttpResponse } from "@angular/common/http";

export const EXPIRE_CACHE_INTERVAL = 10 * 60 * 1000; // 10 minutes

export const DEFAULT_CACHING_TTL = 2 * 60 * 60 * 1000; // Default to 2 hours

export const CACHING_CONFIG = new HttpContextToken<HttpCacheConfig>(() => ({
  maxAge: DEFAULT_CACHING_TTL,
  enabled: false
}));

export interface HttpCacheConfig {
  maxAge?: number; // Maximum age of cached responses
  enabled?: boolean; // Enable or disable caching
  key?: string; // Optional string identifier for the cache
}

export interface HttpCacheEntry {
  response: HttpResponse<unknown>; // Cached HTTP response
  expiry: number; // Timestamp when the cache entry expires
}
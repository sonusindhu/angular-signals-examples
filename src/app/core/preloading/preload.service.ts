import { Injectable } from '@angular/core';
import { CustomPreloadingStrategy } from './custom-preloading.strategy';

@Injectable({ providedIn: 'root' })
export class PreloadService {
  constructor(private strategy: CustomPreloadingStrategy) {}

  preload(path: string) {
    this.strategy.triggerPreload(path);
  }
}

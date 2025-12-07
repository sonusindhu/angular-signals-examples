import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withPreloading } from '@angular/router';
import { ROUTES } from './app-routings';
import { provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CLIPBOARD_OPTIONS, provideMarkdown } from 'ngx-markdown';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { ClipboardButtonComponent } from './app/shared/component/clipboard-button/clipboard-button.component';
import { httpCacheInterceptor } from './app/shared/http-cache/http-cache.interceptor';
import { CustomPreloadingStrategy } from './app/core/preloading/custom-preloading.strategy';
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(
      withInterceptors(
        [httpCacheInterceptor] // Register the HTTP cache interceptor
      )
    ),
    provideRouter(ROUTES, withPreloading(CustomPreloadingStrategy)),
    provideZoneChangeDetection(),
    provideAnimationsAsync(),
    provideMarkdown({
      loader: HttpClient,
      clipboardOptions: {
      provide: CLIPBOARD_OPTIONS,
      useValue: {
        buttonComponent: ClipboardButtonComponent,
      },
    },
    }),
  ],
})
  .then(() => {
    console.log('Standalone app initiazed');
  })
  .catch(() => {
    console.log('application initiazed failed');
  });

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { ROUTES } from './app-routings';
import { provideZoneChangeDetection, SecurityContext } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CLIPBOARD_OPTIONS, provideMarkdown } from 'ngx-markdown';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { ClipboardButtonComponent } from './app/shared/component/clipboard-button/clipboard-button.component';
import { httpCacheInterceptor } from './app/shared/http-cache/http-cache.interceptor';
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(
      withInterceptors(
        [httpCacheInterceptor] // Register the HTTP cache interceptor
      )
    ),
    provideRouter(ROUTES),
    provideZoneChangeDetection(),
    provideAnimationsAsync(),
    provideMarkdown({
      sanitize: SecurityContext.NONE,
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

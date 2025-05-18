import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { ROUTES } from './app-routings';
import { provideZoneChangeDetection, SecurityContext } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CLIPBOARD_OPTIONS, provideMarkdown } from 'ngx-markdown';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { ClipboardButtonComponent } from './app/shared/component/clipboard-button/clipboard-button.component';
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
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

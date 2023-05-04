import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { ROUTES } from './app-routings';
import { provideZoneChangeDetection } from '@angular/core';
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(ROUTES),
    provideZoneChangeDetection({
      eventCoalescing: true,
      runCoalescing: true,
    }),
  ],
})
  .then(() => {
    console.log('Standalone app initiazed');
  })
  .catch(() => {
    console.log('application initiazed failed');
  });

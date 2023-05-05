import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { ROUTES } from './app-routings';
import { provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(ROUTES),
    provideZoneChangeDetection({
        eventCoalescing: true,
        runCoalescing: true,
    }),
    provideAnimations()
],
})
  .then(() => {
    console.log('Standalone app initiazed');
  })
  .catch(() => {
    console.log('application initiazed failed');
  });

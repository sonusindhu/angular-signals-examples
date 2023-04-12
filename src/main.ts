import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { ROUTES } from './app-routings';
bootstrapApplication(AppComponent, {
  providers: [provideRouter(ROUTES)],
})
  .then(() => {
    console.log('Standalone app initiazed');
  })
  .catch(() => {
    console.log('application initiazed failed');
  });

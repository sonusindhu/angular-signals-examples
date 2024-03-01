import { Component, inject, signal } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router,
  RouterModule,
} from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { filter, startWith, tap } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [NgIf, RouterModule, HeaderComponent, FooterComponent],
})
export class AppComponent {
  router = inject(Router);
  loading = signal(false);
  ngOnInit() {
    this.router.events
      .pipe(
        startWith(this.router.events),
        filter(
          (event) =>
            event instanceof NavigationEnd || event instanceof NavigationStart
        ),
        tap(() => this.loading.set(true)),
        filter((event) => event instanceof NavigationEnd),
        tap(() => this.loading.set(false))
      )
      .subscribe();
  }
}

import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
    selector: 'app-header',
    imports: [
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navOpen = false;

  openNav() {
    this.navOpen = true;
    setTimeout(() => {
      const firstLink = document.querySelector('.nav-links a');
      if (firstLink) (firstLink as HTMLElement).focus();
    }, 100);
    document.body.style.overflow = 'hidden';
  }

  closeNav() {
    this.navOpen = false;
    document.body.style.overflow = '';
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.navOpen) {
      this.closeNav();
    }
  }

  constructor() {
    // Optionally, listen for route changes to close nav
  }
}

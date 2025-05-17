import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-signal',
    imports: [CommonModule, RouterModule],
    template: '<router-outlet />'
})
export default class LinkedSignalComponent {}

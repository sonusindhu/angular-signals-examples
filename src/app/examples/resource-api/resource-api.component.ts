import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-resource-api',
    standalone: true,
    imports: [CommonModule, RouterModule],
    template: '<router-outlet />',
    styleUrls: ['./resource-api.component.scss']
})
export default class ResourceApiComponent {}

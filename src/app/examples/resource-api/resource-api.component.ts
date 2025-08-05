import { Component, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { ExampleModel } from 'src/app/shared/models/example.model';
import { RESOURCE_EXAMPLES } from './example-data/resource-examples';
import { RX_RESOURCE_EXAMPLES } from './example-data/rx-resource-examples';
import { HTTP_RESOURCE_EXAMPLES } from './example-data/http-resource-examples';

@Component({
    selector: 'app-resource-api',
    imports: [CommonModule, RouterModule, MatCardModule, MatGridListModule, MatIconModule],
    templateUrl: './resource-api.component.html',
    styleUrls: ['./resource-api.component.scss']
})
export default class ResourceApiComponent {
    
    resourceExamples: WritableSignal<ExampleModel[]> = signal(RESOURCE_EXAMPLES);

    rxResourceExamples: WritableSignal<ExampleModel[]> = signal(RX_RESOURCE_EXAMPLES);

    httpResoureExamples: WritableSignal<ExampleModel[]> = signal(HTTP_RESOURCE_EXAMPLES);

}

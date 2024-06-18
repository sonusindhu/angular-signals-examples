import { Component, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

import { EXAMPLES } from '../shared/consts/examples.const';
import { ExampleModel } from '../shared/models/example.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  examples: WritableSignal<ExampleModel[]> = signal(EXAMPLES);
}

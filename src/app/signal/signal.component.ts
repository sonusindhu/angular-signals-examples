import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss',
})
export default class SignalComponent {}

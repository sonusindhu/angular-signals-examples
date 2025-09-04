import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-home',
    imports: [RouterModule, MatCardModule, MatGridListModule, MatIconModule, MatButtonModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('performanceChart', { static: false }) performanceChart?: ElementRef;
  
  ngAfterViewInit() {
    // Trigger chart animations when component loads
    setTimeout(() => {
      this.animateChart();
    }, 500);
  }
  
  animateChart() {
    if (this.performanceChart) {
      const chartElement = this.performanceChart.nativeElement;
      const bars = chartElement.querySelectorAll('.bar');
      
      bars.forEach((bar: HTMLElement, index: number) => {
        setTimeout(() => {
          bar.classList.add('animate');
        }, index * 500);
      });
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

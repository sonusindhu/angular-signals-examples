import { ChangeDetectionStrategy, Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MarkdownComponent } from 'ngx-markdown';

interface DashboardWidget {
  id: string;
  title: string;
  type: 'chart' | 'stats' | 'table' | 'map';
  priority: 'high' | 'medium' | 'low';
  loaded: boolean;
}

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  date: number;
}

@Component({
    selector: 'app-defer-example11',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatCardModule, MatTabsModule, MatIconModule, MatProgressBarModule, MatChipsModule, MatGridListModule, MatDividerModule, MarkdownComponent],
    templateUrl: './defer-example11.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class DeferExample11Component implements OnInit {
  nowDate = signal(Date.now());
  widgets = signal<DashboardWidget[]>([]);
  loadUserDataSignal = signal(false);
  userRole = signal<'admin' | 'user' | 'viewer'>('user');
  timerProgress = signal(0);
  
  salesData = signal({ revenue: 45230, growth: 12.5, orders: 156 });
  analyticsData = signal({ visitors: 8420, pageViews: 23180, bounceRate: 34.2 });
  
  newsItems: NewsItem[] = [
    { id: 1, title: 'Q3 Sales Report Released', summary: 'Strong performance across all product lines', date: Date.now() - 86400000 },
    { id: 2, title: 'New Feature Launch', summary: 'Advanced analytics dashboard now available', date: Date.now() - 172800000 },
    { id: 3, title: 'System Maintenance', summary: 'Scheduled maintenance window this weekend', date: Date.now() - 259200000 }
  ];

  ngOnInit() {
    this.initializeWidgets();
    this.startProgressTimer();
  }

  private startProgressTimer() {
    const interval = setInterval(() => {
      this.timerProgress.update(progress => {
        if (progress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return progress + 2;
      });
    }, 100);
  }

  private initializeWidgets() {
    const widgets: DashboardWidget[] = [
      { id: 'sales', title: 'Sales Overview', type: 'chart', priority: 'high', loaded: false },
      { id: 'analytics', title: 'Web Analytics', type: 'stats', priority: 'high', loaded: false },
      { id: 'users', title: 'User Management', type: 'table', priority: 'medium', loaded: false },
      { id: 'locations', title: 'Global Locations', type: 'map', priority: 'low', loaded: false }
    ];
    this.widgets.set(widgets);
  }

  changeUserRole(role: 'admin' | 'user' | 'viewer') {
    this.userRole.set(role);
  }

  toggleUserData() {
    this.loadUserDataSignal.update(current => !current);
  }

  resetProgress() {
    this.timerProgress.set(0);
    this.startProgressTimer();
  }

  toggleUserRole() {
    const roles: ('admin' | 'user' | 'viewer')[] = ['admin', 'user', 'viewer'];
    const currentIndex = roles.indexOf(this.userRole());
    const nextIndex = (currentIndex + 1) % roles.length;
    this.userRole.set(roles[nextIndex]);
  }

  loadUserData() {
    this.toggleUserData();
  }

  loadWidget(widgetId: string) {
    console.log(`Loading widget: ${widgetId}`);
    // Simulate widget loading
  }

  formatDate(timestamp: number): string {
    return new Date(timestamp).toLocaleDateString();
  }
}

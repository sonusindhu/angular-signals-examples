import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownComponent } from 'ngx-markdown';
import { rxResource } from '@angular/core/rxjs-interop';
import { HttpClient, HttpContext } from '@angular/common/http';
import { CACHING_CONFIG, DEFAULT_CACHING_TTL } from 'src/app/shared/http-cache/http-cache.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-advanced-example1',
  standalone: true,
  imports: [MatButtonModule, MatTabsModule, MatCardModule, MatIconModule, MarkdownComponent, RouterModule],
  templateUrl: './advanced-example1.component.html',
  styleUrl: './advanced-example1.component.scss'
})
export class AdvancedExample1Component {
  private readonly http = inject(HttpClient);
  limit = signal(5);

  useCache = signal(true);

  todos = rxResource({
    params: () => ({ limit: this.limit() }),
    stream: ({ params }) => this.http.get<any[]>(`https://jsonplaceholder.typicode.com/todos?_limit=${params.limit}`, {
      context: new HttpContext().set(CACHING_CONFIG, {
        maxAge: DEFAULT_CACHING_TTL,
        enabled: this.useCache(),
      })
    }),
    defaultValue: []
  });

  toggleUseCache() {
    this.useCache.set(!this.useCache());
  }

}

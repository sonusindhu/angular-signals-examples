```code
<div class="demo-section">
  <h3>Basic Usage</h3>
  <mat-card>
    <mat-card-content>
      <div class="controls">

        <label for="useCache">Use Cache:</label>
        <input type="checkbox" name="useCache" id="useCache" [checked]="useCache()" (change)="toggleUseCache()">


        <button mat-raised-button color="primary" (click)="todos.reload()">
          <mat-icon>refresh</mat-icon>
          Refresh Data
        </button>
        <p>Current limit: {{ limit() }} items</p>
      </div>

      @if (todos.isLoading()) {
        <div class="loading-state">
          <mat-icon>cached</mat-icon>
          <p>Loading tasks...</p>
        </div>
      }
      @else if(todos.error()) {
        <div class="error-state">
          <mat-icon>error</mat-icon>
          <p>Error: {{ todos.error() }}</p>
        </div>
      }
      @else {
        <div class="data-table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Task</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              @let data = todos.value();
              @if(data) {
                @for (r of data; track r.id) {
                  <tr>
                    <td>{{ r.id }}</td>
                    <td>{{ r.title }}</td>
                    <td>
                      <span class="status" [class.completed]="r.completed">
                        {{ r.completed ? 'Completed' : 'Pending' }}
                      </span>
                    </td>
                  </tr>
                }
              }
            </tbody>
          </table>
        </div>
      }
    </mat-card-content>
  </mat-card>

  <h3>Key Features</h3>
  <mat-card>
    <mat-card-content>
      <ul>
        <li><strong>Automatic Loading States:</strong> Built-in loading and error handling</li>
        <li><strong>Reactive Updates:</strong> Automatically refetches when parameters change</li>
        <li><strong>Type Safety:</strong> Full TypeScript support with proper typing</li>
        <li><strong>Simple API:</strong> Easy to use with minimal boilerplate</li>
      </ul>
    </mat-card-content>
  </mat-card>
</div>
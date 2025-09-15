```html
<div class="content-area">
  <h2>Example 12: On-Demand Preloading with Service & Custom Strategy</h2>
  <p>
    This demo shows how to preload modules only when triggered (e.g., on hover) using a service and custom PreloadingStrategy. Bandwidth is saved until actually needed.
  </p>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      @for (user of users(); track user.id) {
        <tr>
          <td>
            <a [routerLink]="['/advanced/example12/user-form']" (mouseenter)="preloadUserForm()">{{ user.id }}</a>
          </td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
        </tr>
      }
    </tbody>
  </table>
</div>
```html
<ul>
  <ng-container *ngFor="let product of products(); else noProducts">
    <li>{{ product.name }} - ${{ product.price }}</li>
  </ng-container>
  <ng-template #noProducts>
    <li>No products available.</li>
  </ng-template>
</ul>
```

**How it works:**
- Renders a list of products using `*ngFor`.
- If the list is empty, the `ng-template` with `#noProducts` is shown.

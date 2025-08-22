```html
<ng-container [ngTemplateOutlet]="greetingTemplate" [ngTemplateOutletContext]="{ name: 'Alice' }"></ng-container>
<ng-template #greetingTemplate let-name="name">
  <p>Hello, {{ name }}!</p>
</ng-template>
```

**How it works:**
- Passes a custom context (`name`) to the template.
- The template uses `let-name="name"` to access the value.

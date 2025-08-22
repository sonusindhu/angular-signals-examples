```typescript
@Directive({ selector: '[appShowOnEven]' })
export class ShowOnEvenDirective {
  @Input() set appShowOnEven(value: number) {
    this.viewContainer.clear();
    if (value % 2 === 0) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}
}
```

**How it works:**
- Custom structural directive that only renders its content when the value is even.

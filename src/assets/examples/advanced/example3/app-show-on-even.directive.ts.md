```typescript
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appShowOnEven]'
})
export class ShowOnEvenDirective {
  constructor(private templateRef: TemplateRef<any>, private vcr: ViewContainerRef) {}

  @Input() set appShowOnEven(value: number) {
    this.vcr.clear();
    if (value % 2 === 0) {
      this.vcr.createEmbeddedView(this.templateRef);
    }
  }
}
```
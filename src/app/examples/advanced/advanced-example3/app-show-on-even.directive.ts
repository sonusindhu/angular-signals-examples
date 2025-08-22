import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appShowOnEven]'
})
export class ShowOnEvenDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appShowOnEven(value: number) {
    this.viewContainer.clear();
    if (value % 2 === 0) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}

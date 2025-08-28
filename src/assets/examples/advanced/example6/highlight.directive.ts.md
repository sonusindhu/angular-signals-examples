```typescript
import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true
})
export class HighlightDirective {
  @Input('highlight') highlightColor = 'yellow';
  private originalBg: string | null = null;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    const style = this.el.nativeElement.style;
    this.originalBg = style.getPropertyValue('--btn-bg');
    this.el.nativeElement.style.setProperty('--btn-bg', this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.originalBg) {
      this.el.nativeElement.style.setProperty('--btn-bg', this.originalBg);
    } else {
      this.el.nativeElement.style.removeProperty('--btn-bg');
    }
  }
}
```

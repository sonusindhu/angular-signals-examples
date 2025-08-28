```typescript
import { Directive, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[tooltip]',
  standalone: true
})
export class TooltipDirective {
  @Input('tooltip') tooltipText = '';
  private tooltipElement: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.tooltipText) return;
    if (!this.tooltipElement) {
      this.tooltipElement = this.renderer.createElement('span');
      this.tooltipElement!.innerText = this.tooltipText;
      this.renderer.addClass(this.tooltipElement, 'tooltip');
      this.renderer.appendChild(document.body, this.tooltipElement);
      const rect = this.el.nativeElement.getBoundingClientRect();
      this.tooltipElement!.style.position = 'fixed';
      this.tooltipElement!.style.top = rect.bottom + 6 + 'px';
      this.tooltipElement!.style.left = rect.left + 'px';
      this.tooltipElement!.style.background = '#333';
      this.tooltipElement!.style.color = '#fff';
      this.tooltipElement!.style.padding = '4px 10px';
      this.tooltipElement!.style.borderRadius = '4px';
      this.tooltipElement!.style.fontSize = '0.9rem';
      this.tooltipElement!.style.zIndex = '1000';
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.tooltipElement) {
      this.renderer.removeChild(document.body, this.tooltipElement);
      this.tooltipElement = null;
    }
  }
}
```

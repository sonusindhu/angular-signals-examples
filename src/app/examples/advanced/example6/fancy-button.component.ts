import { Component, Input, HostBinding } from '@angular/core';

import { TooltipDirective } from './tooltip.directive';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'fancy-button',
  standalone: true,
  imports: [],
  template: `<button><ng-content></ng-content></button>`,
  styles: [`
    :host {
      display: inline-block;
      font-size: 1.1rem;
      padding: 0.7rem 1.5rem;
      border-radius: 6px;
      border: none;
      margin: 0.5rem 0.5rem 0.5rem 0;
      box-shadow: 0 2px 8px rgba(25, 118, 210, 0.08);
      cursor: pointer;
      transition: background 0.2s, color 0.2s;
      background: var(--btn-bg, #e3f2fd);
      color: var(--btn-color, #1976d2);
    }
    :host(:hover) {
      filter: brightness(0.95);
      box-shadow: 0 4px 16px rgba(25, 118, 210, 0.12);
    }
    button {
      background: transparent;
      color: inherit;
      border: none;
      font: inherit;
      padding: 0;
      margin: 0;
      cursor: inherit;
    }
  `],
  hostDirectives: [
    {
      directive: HighlightDirective,
      inputs: ['highlight']
    },
    {
      directive: TooltipDirective,
      inputs: ['tooltip']
    }
  ]
})
export class FancyButtonComponent {
  @Input() color: string = '#e3f2fd';
  @Input() tooltip: string = '';
  @Input() highlight: string = '';

  @HostBinding('style.--btn-bg') get hostBg() {
    return this.color;
  }
  @HostBinding('style.--btn-color') get hostColor() {
    return this.getTextColor(this.color);
  }

  getTextColor(bg: string): string {
    if (!bg) return '#1976d2';
    const c = bg.charAt(0) === '#' ? bg.substring(1, 7) : bg;
    const r = parseInt(c.substring(0, 2), 16);
    const g = parseInt(c.substring(2, 4), 16);
    const b = parseInt(c.substring(4, 6), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.6 ? '#1976d2' : '#fff';
  }
}

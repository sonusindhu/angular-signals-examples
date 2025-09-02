import { Directive, effect, input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[disableControl]'
})
export class DisableControlDirective {
  // Reactive input
  disableControl = input<boolean>(false);

  constructor(private ngControl: NgControl) {
    // Create a reactive effect that waits until control is available
    effect(() => {
      const disableControl = this.disableControl();
      const control = this.ngControl.control;

      // If control is not yet available, skip this run
      if (!control) return;

      // Schedule the enable/disable logic to avoid race conditions
      queueMicrotask(() => {
        if (disableControl) {
          control.disable({ emitEvent: false });
        } else {
          control.enable({ emitEvent: false });
        }
      });
    });
  }
}
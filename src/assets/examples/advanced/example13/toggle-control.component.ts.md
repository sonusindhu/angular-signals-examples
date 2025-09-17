```typescript
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [NgClass],
  template: `
    <div
      (click)="toggle()"
      [class.on]="value"
      [class.disabled]="isDisabled"
      class="cursor-pointer select-none px-6 py-2 rounded-full border-2 transition-colors duration-200 font-semibold text-center w-24"
      [ngClass]="{
        'bg-blue-600 text-white border-blue-600': value && !isDisabled,
        'bg-gray-200 text-gray-700 border-gray-400': !value && !isDisabled,
        'opacity-50 cursor-not-allowed': isDisabled
      }"
      tabindex="0"
      role="switch"
      [attr.aria-checked]="value"
      [attr.aria-disabled]="isDisabled"
    >
      {{ value ? 'ON' : 'OFF' }}
    </div>
  `,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ToggleComponent),
    multi: true
  }]
})
export class ToggleComponent implements ControlValueAccessor {
  @Input() isDisabled = false;
  value = false;

  private onChange = (value: boolean) => {};
  private onTouched = () => {};

  toggle() {
    if (this.isDisabled) return;
    this.value = !this.value;
    this.onChange(this.value);
    this.onTouched();
  }

  writeValue(value: boolean) { this.value = value; }
  registerOnChange(fn: (value: boolean) => void) { this.onChange = fn; }
  registerOnTouched(fn: () => void) { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean) { this.isDisabled = isDisabled; }
}
```

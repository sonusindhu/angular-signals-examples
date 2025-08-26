```typescript
import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-advanced-example4',
  templateUrl: './advanced-example4.component.html',
  styleUrls: ['./advanced-example4.component.scss']
})
export class AdvancedExample4Component {
  form: FormGroup;
  disabledSignal = signal(false);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  toggleDisabled() {
    this.disabledSignal.set(!this.disabledSignal());
  }
}
```

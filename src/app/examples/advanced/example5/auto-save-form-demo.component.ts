import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AutoSaveFormDirective } from './auto-save-form.directive';

@Component({
  selector: 'app-auto-save-form-demo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AutoSaveFormDirective],
  templateUrl: './auto-save-form-demo.component.html',
  styleUrls: ['./auto-save-form-demo.component.scss']
})
export class AutoSaveFormDemoComponent {
  form: FormGroup;
  savingStatus = signal<'idle' | 'saving' | 'saved' | 'error'>('idle');

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      notes: ['']
    });
  }

  saveToApi = async (value: any) => {
    // Simulate API call
    await new Promise(res => setTimeout(res, 1000));
    // Uncomment to simulate error:
    // throw new Error('API error');
    return true;
  };
}

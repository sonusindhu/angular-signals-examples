import { Directive, Input, Output, EventEmitter, OnDestroy, OnInit, Signal, signal } from '@angular/core';
import { FormGroup, FormArray, AbstractControl } from '@angular/forms';
import { throttleTime, distinctUntilChanged, Subscription, timer, skip } from 'rxjs';

@Directive({
  selector: '[autoSaveForm]'
})
export class AutoSaveFormDirective implements OnInit, OnDestroy {
  @Input('autoSaveForm') form!: FormGroup | FormArray | AbstractControl;
  @Input() debounce = 1000;
  @Input() storageKey = 'autoSaveFormDraft';
  @Input() apiSaveFn?: (value: any) => Promise<any>;
  @Output() savingStatus = new EventEmitter<'idle' | 'saving' | 'saved' | 'error'>();

  private sub?: Subscription;
  private lastSavedValue: any;
  private statusSignal = signal<'idle' | 'saving' | 'saved' | 'error'>('idle');
  private retryTimeout: any;
  private apiRetryCount = 0;
  private readonly maxApiRetries = 5;
  private skipFirstEmission = true;

  get status(): Signal<'idle' | 'saving' | 'saved' | 'error'> {
    return this.statusSignal;
  }

  ngOnInit() {
    if (!this.form) return;
    // Restore draft
    const draft = localStorage.getItem(this.storageKey);
    if (draft) {
      try {
        this.form.patchValue(JSON.parse(draft));
      } catch {}
    }
    this.sub = this.form.valueChanges
      .pipe(
        throttleTime(this.debounce),
        distinctUntilChanged()
      )
      .subscribe(value => {
        if (this.skipFirstEmission) {
          this.skipFirstEmission = false;
          return;
        }
        if (!this.form.dirty && !this.form.touched) return;
        this.saveDraft(value);
        this.saveToApi(value);
      });
  }

  clearDraft() {
    localStorage.removeItem(this.storageKey);
  }

  private saveDraft(value: any) {
    localStorage.setItem(this.storageKey, JSON.stringify(value));
    this.statusSignal.set('saving');
    this.savingStatus.emit('saving');
    timer(500).subscribe(() => {
      this.statusSignal.set('saved');
      this.savingStatus.emit('saved');
    });
  }

  private saveToApi(value: any) {
    if (!this.apiSaveFn) return;
    if (this.apiRetryCount >= this.maxApiRetries) return;
    this.statusSignal.set('saving');
    this.savingStatus.emit('saving');
    Promise.resolve()
      .then(() => this.apiSaveFn!(value))
      .then(() => {
        this.statusSignal.set('saved');
        this.savingStatus.emit('saved');
        this.lastSavedValue = value;
        this.apiRetryCount = 0;
      })
      .catch(() => {
        this.statusSignal.set('error');
        this.savingStatus.emit('error');
        this.apiRetryCount++;
        // Retry after 5s
        if (this.apiRetryCount < this.maxApiRetries) {
          this.retryTimeout = setTimeout(() => this.saveToApi(value), 5000);
        }
      });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
    if (this.retryTimeout) clearTimeout(this.retryTimeout);
  }
}

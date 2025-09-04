import { ComponentRef } from '@angular/core';
import { Subject } from 'rxjs';

export class ModalRef<T = any> {
  private readonly _onClose = new Subject<void>();
  private readonly _onConfirm = new Subject<any>();

  constructor(public containerRef: ComponentRef<any>) {}

  close() {
    this._onClose.next();
    this._onClose.complete();
    this.containerRef.destroy(); // ✅ destroy container, not child
  }

  confirm(result?: any) {
    this._onConfirm.next(result);
    this._onConfirm.complete();
    this.containerRef.destroy(); // ✅ destroy container
  }

  get onClose() {
    return this._onClose.asObservable();
  }

  get onConfirm() {
    return this._onConfirm.asObservable();
  }
}

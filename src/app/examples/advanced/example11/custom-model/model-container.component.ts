import { Component, Input, ViewChild, ViewContainerRef, ComponentRef, Type, OnDestroy } from '@angular/core';
import { ModalRef } from './model.ref';

@Component({
  selector: 'modal-container',
  template: `
    <div class="modal-backdrop" (click)="onBackdropClick()"></div>
    <div class="modal-content">
      <ng-template #vc></ng-template>
    </div>
  `,
  styles: [`
    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.5);
    }
    .modal-content {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #fff;
      border-radius: 8px;
      padding: 1rem;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
      min-width: 300px;
    }
  `]
})
export class ModalContainerComponent implements OnDestroy {
  @Input() modalRef!: ModalRef<any>;
  @ViewChild('vc', { read: ViewContainerRef, static: true }) vc!: ViewContainerRef;

  private childRef?: ComponentRef<any>;

  loadChild<T>(component: Type<T>, inputs?: Partial<T>) {
    this.childRef = this.vc.createComponent(component);
    if (inputs) {
      Object.assign(this.childRef.instance, inputs);
    }
    (this.childRef.instance as any).modalRef = this.modalRef;
  }

  onBackdropClick() {
    this.modalRef.close();
  }

  ngOnDestroy() {
    this.childRef?.destroy();
  }
}

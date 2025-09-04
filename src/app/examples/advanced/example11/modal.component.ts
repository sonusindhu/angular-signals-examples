import { Component } from '@angular/core';
import { ModalRef } from './custom-model/model.ref';

@Component({
  selector: 'app-confirm-modal',
  template: `
    <div class="backdrop"></div>
    <div class="modal">
      <h2>{{ title }}</h2>
      <p>{{ message }}</p>
      <button (click)="confirm()">Confirm</button>
      <button (click)="close()">Cancel</button>
    </div>
  `,
  styles: [`
    .backdrop {
      position: fixed; inset: 0;
      background: rgba(0,0,0,0.5);
    }
    .modal {
      position: fixed;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      background: white;
      padding: 1rem;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.3);
      z-index: 1000;
    }
  `]
})
export class ConfirmModalComponent {
  title = '';
  message = '';

  modalRef!: ModalRef<ConfirmModalComponent>; // injected by service

  close() {
    this.modalRef.close();
  }

  confirm() {
    this.modalRef.confirm(true);
  }

}

import { Component } from '@angular/core';
import { ModalRef } from './model.ref';

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
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.5);
      z-index: 1000;
    }
    .modal {
      position: fixed;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      background: #fff;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.25);
      min-width: 320px;
      min-height: 120px;
      z-index: 1001;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
    .modal h2 {
      margin-bottom: 0.5rem;
      font-size: 1.3rem;
      font-weight: 600;
    }
    .modal p {
      color: #555;
      font-size: 1rem;
      margin-bottom: 1rem;
    }
    .modal button {
      min-width: 100px;
      font-size: 1rem;
      margin: 0 0.5rem;
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

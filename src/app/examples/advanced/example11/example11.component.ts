import { Component, inject } from '@angular/core';
import { ModalService } from './custom-model/modal.service';
import { ConfirmModalComponent } from './modal.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-advanced-example11',
  standalone: true,
  imports: [
    MatTabsModule,
    MatButtonModule,
    RouterModule,
    MarkdownModule,
  ],
  templateUrl: './example11.component.html',
  styleUrls: ['./example11.component.scss']
})
export class Example11Component {
  private modalService = inject(ModalService);

  openModal() {
    const modalRef = this.modalService.open(ConfirmModalComponent, {
        title: 'Delete Item?',
        message: 'Are you sure you want to delete this record?'
    });

    modalRef.onClose.subscribe(() => {
        console.log('Modal closed');
    });

    modalRef.onConfirm.subscribe(() => {
        console.log('Confirmed action');
    });

  }
}

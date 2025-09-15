```typescript
import {
  Injectable, Type, ApplicationRef, Injector,
  EnvironmentInjector, createComponent
} from '@angular/core';
import { ModalRef } from './model.ref';
import { ModalContainerComponent } from './model-container.component';

@Injectable({ providedIn: 'root' })
export class ModalService {
  private modalContainer: HTMLElement;

  constructor(private appRef: ApplicationRef, private injector: Injector) {
    let existing = document.getElementById('app-modal-container');
    if (existing) {
      this.modalContainer = existing;
    } else {
      this.modalContainer = document.createElement('div');
      this.modalContainer.id = 'app-modal-container';
      document.body.appendChild(this.modalContainer);
    }
  }

  open<T extends object>(component: Type<T>, inputs?: Partial<T>): ModalRef<T> {
    // Always (re)create the modal container if missing
    let existing = document.getElementById('app-modal-container');
    if (existing) {
      this.modalContainer = existing;
    } else {
      this.modalContainer = document.createElement('div');
      this.modalContainer.id = 'app-modal-container';
      document.body.appendChild(this.modalContainer);
    }

    // 1. Create container
    const containerRef = createComponent(ModalContainerComponent, {
      environmentInjector: this.appRef.injector as EnvironmentInjector,
      elementInjector: this.injector
    });
    this.appRef.attachView(containerRef.hostView);
    this.modalContainer.appendChild(containerRef.location.nativeElement);

    // 2. Create target modal inside container
    const cmpRef = containerRef.instance.vc.createComponent(component);

    if (inputs) {
      Object.assign(cmpRef.instance, inputs);
    }

    // 3. Build ModalRef for inner component
    const modalRef = new ModalRef(cmpRef);

    return modalRef;
  }
}
```

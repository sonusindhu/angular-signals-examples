import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MarkdownComponent } from 'ngx-markdown';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'signal-example16',
    templateUrl: `./signal-example16.component.html`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatButtonModule, MatTabsModule, MarkdownComponent],
    styleUrl: `./signal-example16.component.scss`,
})
export default class SignalExample16Component {
  // Writable signal: can be updated anywhere in this class
  name = signal('Sonu');

  // Readonly signal: can only be read, not updated directly
  // Useful for exposing state to consumers (e.g., child components) without allowing mutation
  readOnlyName = this.name.asReadonly();

  // Example: This method updates the writable signal
  updateName(updatedName: string) {
    this.name.set(updatedName);
  }

  // Example: A method that tries to update the readonly signal (will not work)
  // Uncommenting the following will cause a TypeScript error:
  // updateReadOnlyName(newName: string) {
  //   this.readOnlyName.set(newName); // ❌ Not allowed, readOnlyName is readonly
  // }
}

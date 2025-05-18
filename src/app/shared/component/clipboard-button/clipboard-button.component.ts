import { Component } from '@angular/core';

@Component({
  selector: 'app-clipboard-button',
  imports: [],
  templateUrl: './clipboard-button.component.html',
  styleUrl: './clipboard-button.component.scss'
})
export class ClipboardButtonComponent {
 onClick() {
    alert('Copied to clipboard!');
  }
}

import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatTab, MatTabGroup } from "@angular/material/tabs";
import { MarkdownComponent } from "ngx-markdown";

interface ExampleTab {
  label: string; // The label for the tab, displayed as the tab title.
  src: string;   // The source file path for the content of the tab, typically a Markdown file.
}

@Component({
  selector: 'tab-list',
  templateUrl: './tab-list.component.html',
  styleUrl: './tab-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatTabGroup, MarkdownComponent, MatTab],
})
export class TabListComponent {

  // This input is required and expects an array of Tab objects, each containing a label and a source file path.
  tabs = input.required<ExampleTab[]>();

  // This is the heading for the example, it can be used to provide a title or main topic for the example.
  heading = input<string>('Example Heading');

  // This is a description for the example, it can be used to provide additional context or instructions. 
  description = input<string>('Example Description');

}

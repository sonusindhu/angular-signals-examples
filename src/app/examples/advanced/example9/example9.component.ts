import { Component, signal, computed } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownComponent } from 'ngx-markdown';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { JsonPipe } from '@angular/common';

interface FormState {
  name: string;
  age: number;
}

@Component({
  selector: 'app-example9',
  standalone: true,
  imports: [MatTabsModule, MatCardModule, MatIconModule, MarkdownComponent, RouterModule, MatButtonModule, JsonPipe],
  templateUrl: './example9.component.html',
  styleUrl: './example9.component.scss'
})
export class Example9Component {
  form = signal<FormState>({ name: '', age: 0 });
  private undoStack = signal<FormState[]>([]);
  private redoStack = signal<FormState[]>([]);

  canUndo = computed(() => this.undoStack().length > 0);
  canRedo = computed(() => this.redoStack().length > 0);

  updateForm(patch: Partial<FormState>) {
    this.undoStack.set([...this.undoStack(), this.form()]);
    this.redoStack.set([]);
    this.form.set({ ...this.form(), ...patch });
  }

  undo() {
    if (this.undoStack().length === 0) return;
    const prev = this.undoStack().at(-1)!;
    this.redoStack.set([this.form(), ...this.redoStack()]);
    this.undoStack.set(this.undoStack().slice(0, -1));
    this.form.set(prev);
  }

  redo() {
    if (this.redoStack().length === 0) return;
    const next = this.redoStack().at(0)!;
    this.undoStack.set([...this.undoStack(), this.form()]);
    this.redoStack.set(this.redoStack().slice(1));
    this.form.set(next);
  }
}

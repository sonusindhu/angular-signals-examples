import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, WritableSignal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-signal-example5',
  standalone: true,
  templateUrl: './signal-example5.component.html',
  styleUrl: './signal-example5.component.scss',
  imports: [
    FormsModule,
    NgFor,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class SignalExample5Component {
  todoName = '';
  todos: WritableSignal<string[]> = signal([]);

  addTodo(todo: HTMLInputElement): void {
    const item = todo.value;
    this.updateTodos(item);
    this.resetAndFocus(todo);
  }

  updateTodos(todo: string){
    this.todos.update((todos) => [todo, ...todos]);
  }

  resetAndFocus(todo: HTMLInputElement){
    todo.value = '';
    todo.focus();
  }
}

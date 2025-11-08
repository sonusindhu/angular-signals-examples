import { Component, signal, effect } from '@angular/core';
import { form, required, minLength, schema, applyEach, Field, customError, validateTree, ValidationError } from '@angular/forms/signals';
import { JsonPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { MarkdownComponent } from 'ngx-markdown';

// Types for dynamic projects/tasks form
export type Task = {
  title: string;
  done: boolean;
  priority: 'Low' | 'Medium' | 'High';
  dueDate: string;
};

export type Project = {
  name: string;
  deadline: string;
  status: 'Not Started' | 'In Progress' | 'Completed';
  tasks: Task[];
};

export type UserProjects = {
  username: string;
  projects: Project[];
};

// Schema for validation
const userProjectsSchema = schema<UserProjects>((f) => {
  required(f.username, { message: 'Username is required' });
  applyEach(f.projects, (project) => {
    required(project.name, { message: 'Project name is required' });
    minLength(project.name, 3, { message: 'Project name must be at least 3 characters' });
    required(project.deadline, { message: 'Deadline is required' });
    required(project.status, { message: 'Status is required' });

    validateTree(project.deadline, ({ value, fieldOf }) => {
      const errors: ValidationError[] = [];
      const isNotValid = value() && new Date(value()) < new Date();
      if (isNotValid) {
        errors.push(customError({ kind: 'deadlinePast', field: fieldOf(project.deadline), message: 'Deadline must be in the future' }));
      }
      return errors;
    });

  
    applyEach(project.tasks, (task) => {
      required(task.title, { message: 'Task title is required' });
      minLength(task.title, 2, { message: 'Task title must be at least 2 characters' });
      required(task.priority, { message: 'Priority is required' });
      required(task.dueDate, { message: 'Due date is required' });
      validateTree(task.dueDate, ({ value, fieldOf }) => {
        const errors: ValidationError[] = [];
        const isNotValid = value() && new Date(value()) < new Date();
        if (isNotValid) {
          errors.push(customError({ kind: 'dueDatePast', field: fieldOf(task.dueDate), message: 'Due date must be in the future' }));
        }
        return errors;
      });
    });
  });
});

@Component({
  selector: 'app-example6',
  templateUrl: './example6.component.html',
  styleUrls: ['./example6.component.scss'],
  imports: [
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MarkdownComponent,
    RouterModule,
    Field,
    JsonPipe
  ],
})
export class Example6Component {
  userProjects = signal<UserProjects>({
    username: '',
    projects: [],
  });

  userProjectsForm = form(this.userProjects, userProjectsSchema);

  addProject() {
    this.userProjects.update((state) => ({
      ...state,
      projects: [
        ...state.projects,
        {
          name: '',
          deadline: '',
          status: 'Not Started',
          tasks: [],
        },
      ],
    }));
  }

  removeProject(index: number) {
    this.userProjects.update((state) => ({
      ...state,
      projects: state.projects.filter((_, i) => i !== index),
    }));
  }

  addTask(projectIndex: number) {
    this.userProjects.update((state) => {
      const projects = [...state.projects];
      projects[projectIndex] = {
        ...projects[projectIndex],
        tasks: [
          ...projects[projectIndex].tasks,
          {
            title: '',
            done: false,
            priority: 'Medium',
            dueDate: '',
          },
        ],
      };
      return { ...state, projects };
    });
  }

  removeTask(projectIndex: number, taskIndex: number) {
    this.userProjects.update((state) => {
      const projects = [...state.projects];
      projects[projectIndex] = {
        ...projects[projectIndex],
        tasks: projects[projectIndex].tasks.filter((_, j) => j !== taskIndex),
      };
      return { ...state, projects };
    });
  }

  // Helper to get completed/total tasks for a project
  getProjectTaskSummary(projectIndex: number): string {
    const project = this.userProjects().projects[projectIndex];
    const total = project.tasks.length;
    const completed = project.tasks.filter(t => t.done).length;
    return `${completed} / ${total} tasks completed`;
  }

  public errors = effect(() => {
    return this.userProjectsForm().errors();
  });

  onSubmit() {
    if (this.userProjectsForm().valid()) {
      console.log('Submitted:', this.userProjects());
    }
  }
}

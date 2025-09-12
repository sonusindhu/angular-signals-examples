```html
<!-- Example6 assets: HTML -->
<!-- Copy structure and comments from example5, but adapt for projects/tasks form -->
<form (ngSubmit)="onSubmit()">
  <div>
    <input placeholder="Username" [control]="userProjectsForm.username" />
    @if(userProjectsForm.username().touched() || userProjectsForm.username().dirty()) {
      @for (err of userProjectsForm.username().errors(); track err.kind) {
        <p style="color:red">{{ err.message }}</p>
      }
    }
  </div>
  <div>
    <h3>Projects</h3>
    <button type="button" (click)="addProject()">Add Project</button>
    @for (project, i of userProjectsForm.projects(); track i) {
      <mat-card class="mb-4">
        <div>
          <input placeholder="Project Name" [control]="project.name" />
          @for (err of project.name().errors(); track err.kind) {
            <p style="color:red">{{ err.message }}</p>
          }
        </div>
        <div>
          <input placeholder="Deadline" type="date" [control]="project.deadline" />
          @for (err of project.deadline().errors(); track err.kind) {
            <p style="color:red">{{ err.message }}</p>
          }
        </div>
        <div>
          <select [control]="project.status">
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          @for (err of project.status().errors(); track err.kind) {
            <p style="color:red">{{ err.message }}</p>
          }
        </div>
        <button type="button" (click)="removeProject(i)">Remove Project</button>
        <div>
          <h4>Tasks</h4>
          <button type="button" (click)="addTask(i)">Add Task</button>
          @for (task, j of project.tasks(); track j) {
            <div class="task-row">
              <input placeholder="Task Title" [control]="task.title" />
              @for (err of task.title().errors(); track err.kind) {
                <p style="color:red">{{ err.message }}</p>
              }
              <select [control]="task.priority">
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
              @for (err of task.priority().errors(); track err.kind) {
                <p style="color:red">{{ err.message }}</p>
              }
              <input placeholder="Due Date" type="date" [control]="task.dueDate" />
              @for (err of task.dueDate().errors(); track err.kind) {
                <p style="color:red">{{ err.message }}</p>
              }
              <label>
                <input type="checkbox" [control]="task.done" /> Done
              </label>
              <button type="button" (click)="removeTask(i, j)">Remove Task</button>
            </div>
          }
        </div>
        <div>
          <strong>Summary:</strong> {{ getProjectTaskSummary(i) }}
        </div>
      </mat-card>
    }
  </div>
  <button type="submit" [disabled]="!userProjectsForm.valid()">Submit</button>
</form>
```

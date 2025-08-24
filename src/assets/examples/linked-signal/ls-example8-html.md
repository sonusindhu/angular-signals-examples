```html
<div class="quiz-section">
  <div class="form-row">
    <mat-form-field appearance="fill">
      <mat-label>Quiz Topic</mat-label>
      <mat-select [value]="topic()" (selectionChange)="setTopic($event.value)">
        <mat-option *ngFor="let t of topics" [value]="t.key">{{t.label}}</mat-option>
      </mat-select>
    </mat-form-field>
  </div>
  <div class="question-card" *ngIf="currentQuestion()">
    <h4>Question {{currentIndex() + 1}} of {{questions().length}}</h4>
    <div class="question">{{currentQuestion().text}}</div>
  </div>
  <div class="pagination-section">
    <button mat-stroked-button color="primary" (click)="prevQuestion()" [disabled]="currentIndex() === 0">Prev</button>
    <span class="page-info">{{currentIndex() + 1}} / {{questions().length}}</span>
    <button mat-stroked-button color="primary" (click)="nextQuestion()" [disabled]="currentIndex() === questions().length - 1">Next</button>
  </div>
</div>
```

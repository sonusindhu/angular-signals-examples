import { Component, signal, linkedSignal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MarkdownComponent } from 'ngx-markdown';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

interface Question {
  text: string;
}
interface Topic {
  key: string;
  label: string;
  questions: Question[];
}

const TOPICS: Topic[] = [
  {
    key: 'math',
    label: 'Math',
    questions: [
      { text: 'What is 2 + 2?' },
      { text: 'What is the square root of 16?' },
      { text: 'What is 10 divided by 2?' },
    ],
  },
  {
    key: 'science',
    label: 'Science',
    questions: [
      { text: 'What planet is known as the Red Planet?' },
      { text: 'What is H2O commonly known as?' },
      { text: 'What force keeps us on the ground?' },
    ],
  },
  {
    key: 'history',
    label: 'History',
    questions: [
      { text: 'Who was the first President of the United States?' },
      { text: 'In which year did World War II end?' },
      { text: 'What ancient civilization built the pyramids?' },
    ],
  },
];

@Component({
  selector: 'app-ls-example8',
  templateUrl: './ls-example8.component.html',
  styleUrl: './ls-example8.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MarkdownComponent,
    RouterModule,
    MatButtonModule
  ]
})
export class LsExample8Component {
  topics = TOPICS;
  topic = signal('math');

  questions = computed(() => {
    const t = TOPICS.find(t => t.key === this.topic());
    return t ? t.questions : [];
  });

  currentIndex = linkedSignal({
    source: () => this.topic(),
    computation: () => 0
  });

  currentQuestion = computed(() => this.questions()[this.currentIndex()]);

  setTopic(val: string) {
    this.topic.set(val);
    // currentIndex auto-resets via linkedSignal
  }
  prevQuestion() {
    if (this.currentIndex() > 0) this.currentIndex.set(this.currentIndex() - 1);
  }
  nextQuestion() {
    if (this.currentIndex() < this.questions().length - 1) this.currentIndex.set(this.currentIndex() + 1);
  }
}

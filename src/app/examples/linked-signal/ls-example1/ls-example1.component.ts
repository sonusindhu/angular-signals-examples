import { Component, effect, linkedSignal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';


interface Course {
  id: number;
  title: string;
  defaultQuantity: number;
};

const COURSES: Course[] = [
  {
    id: 1,
    title: "Angular for Beginners",
    defaultQuantity: 10
  },
  {
    id: 2,
    title: "Angular Signals In Depth",
    defaultQuantity: 20
  },
  {
    id: 3,
    title: "Angular SSR In Depth",
    defaultQuantity: 30
  }
];

@Component({
  selector: 'app-ls-example1',
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule],
  templateUrl: './ls-example1.component.html',
  styleUrl: './ls-example1.component.scss'
})
export default class LsExample1Component {
  courses = signal<Course[]>(COURSES);
  selectedCourseId = signal<number | null>(1);

  quantity = linkedSignal({
    source: () => ({ selectedCourseId: this.selectedCourseId }),
    computation: (source, previous) => {
      const course = this.courses().find(c => c.id == source.selectedCourseId());
      if(course){
        return this.courses().find(c => c.id === source.selectedCourseId())?.defaultQuantity;
      }
      return this.courses()[0].defaultQuantity;
    }
  });

  onQuantityChanged(quantity: string) {
    this.quantity.set(parseInt(quantity));
  }
}

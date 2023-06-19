import { ChangeDetectionStrategy, Component, effect, signal, untracked } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'signal-example12',
  standalone: true,
  templateUrl: `./signal-example12.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule]
})
export default class SignalExample12Component {
  counter1 = signal(1);
  counter2 = signal(1);

  counterUpdate$ = effect(() => {
    console.log(this.counter1(), untracked(() => this.counter2()));
  });

  updateCounter1(){
    this.counter1.update(() => this.counter1() + 1)
  }
  
  updateCounter2(){
    this.counter2.update(() => this.counter2() + 1)
  }

}

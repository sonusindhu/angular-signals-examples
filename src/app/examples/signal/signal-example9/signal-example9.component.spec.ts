import { TestBed } from '@angular/core/testing';
import SignalExample9Component from './signal-example9.component';

describe('Example 9', () => {
  let component: SignalExample9Component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SignalExample9Component],
    }).compileComponents();

    component = TestBed.createComponent(
      SignalExample9Component
    ).componentInstance;
  });

  it('Initialize Example 9', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import SignalExample13Component from './signal-example13.component';

describe('Example 13', () => {
  let component: SignalExample13Component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SignalExample13Component],
    }).compileComponents();

    component = TestBed.createComponent(
      SignalExample13Component
    ).componentInstance;
  });

  it('Example 13 component Intialized', () => {
    expect(component).toBeTruthy();
  });
});

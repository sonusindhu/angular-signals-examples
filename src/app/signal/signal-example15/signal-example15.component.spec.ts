import { TestBed } from '@angular/core/testing';
import SignalExample15Component from './signal-example15.component';

describe('Example 15', () => {
  let component: SignalExample15Component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SignalExample15Component],
    }).compileComponents();

    component = TestBed.createComponent(
      SignalExample15Component
    ).componentInstance;
  });

  it('Example 15 component Intialized', () => {
    expect(component).toBeTruthy();
  });
});

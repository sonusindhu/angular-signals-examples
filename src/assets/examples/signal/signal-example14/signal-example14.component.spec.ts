import { TestBed } from '@angular/core/testing';
import SignalExample14Component from './signal-example14.component';

describe('Example 14', () => {
  let component: SignalExample14Component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SignalExample14Component],
    }).compileComponents();

    component = TestBed.createComponent(
      SignalExample14Component
    ).componentInstance;
  });

  it('Example 14 component Intialized', () => {
    expect(component).toBeTruthy();
  });
});

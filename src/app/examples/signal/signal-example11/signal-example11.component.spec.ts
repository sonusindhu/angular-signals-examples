import { TestBed } from '@angular/core/testing';
import SignalExample11Component from './signal-example11.component';

describe('Example 11', () => {
  let component: SignalExample11Component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SignalExample11Component],
    }).compileComponents();

    component = TestBed.createComponent(
      SignalExample11Component
    ).componentInstance;
  });

  it('Example 11 component Intialized', () => {
    expect(component).toBeTruthy();
  });
});

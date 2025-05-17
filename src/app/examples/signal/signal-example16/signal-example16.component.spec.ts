import { TestBed } from '@angular/core/testing';
import SignalExample16Component from './signal-example16.component';

describe('Example 16', () => {
  let component: SignalExample16Component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SignalExample16Component],
    }).compileComponents();

    component = TestBed.createComponent(
      SignalExample16Component
    ).componentInstance;
  });

  it('Example 16 component Intialized', () => {
    expect(component).toBeTruthy();
  });

});

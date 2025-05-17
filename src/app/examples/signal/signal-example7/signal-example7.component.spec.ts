import { TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import SignalExample7Component from './signal-example7.component';

describe('Example 7', () => {
  let component: SignalExample7Component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SignalExample7Component, CommonModule, MatButtonModule],
    }).compileComponents();
    component = TestBed.createComponent(SignalExample7Component).componentInstance;
  });


  it('should initialize example 7', () => {
    expect(component).toBeTruthy();
  });

  // it('intial counter is 1000', () => {
  //   expect(component.counter()).toEqual(1000);
  // });
  

});

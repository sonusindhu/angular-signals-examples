import { TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import SignalExample1Component from './signal-example1.component';

describe('Example 1', () => {
  let component: SignalExample1Component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SignalExample1Component, CommonModule, MatButtonModule],
    }).compileComponents();
    component = TestBed.createComponent(SignalExample1Component).componentInstance;
  });


  it('should initialize example 1', () => {
    expect(component).toBeTruthy();
  });

  it('count initialized with 1', () => {
    expect(component.count()).toEqual(1);
  });
  
  it('increaseCount() - count increased to 2', () => {
    component.increaseCount();
    expect(component.count()).toEqual(2);
  });
  
  it('decreaseCount() - count decreased to 0', () => {
    component.decreaseCount();
    expect(component.count()).toEqual(0);
  });

});

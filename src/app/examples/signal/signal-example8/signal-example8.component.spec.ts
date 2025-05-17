import { TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import SignalExample8Component from './signal-example8.component';

describe('Example 8', () => {
  let component: SignalExample8Component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SignalExample8Component, CommonModule, MatButtonModule],
    }).compileComponents();
    component = TestBed.createComponent(SignalExample8Component).componentInstance;
  });


  it('should initialize example 8', () => {
    expect(component).toBeTruthy();
  });

  it('intial count is 1000', () => {
    expect(component.count()).toEqual(1000);
  });
  
  it('updated count to 1001', () => {
    component.updateCount();
    expect(component.count()).toEqual(1001);
  });
  

});

import { TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import SignalExample4Component from './signal-example4.component';

describe('Example 4', () => {
  let component: SignalExample4Component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SignalExample4Component, CommonModule, MatButtonModule],
    }).compileComponents();
    component = TestBed.createComponent(SignalExample4Component).componentInstance;
  });


  it('should initialize example 4', () => {
    expect(component).toBeTruthy();
  });

  it('intial count is 0', () => {
    expect(component.count()).toEqual(0);
  });
  
  it('Update count to 1', () => {
    component.increaseCount();
    expect(component.count()).toEqual(1);
  });

});

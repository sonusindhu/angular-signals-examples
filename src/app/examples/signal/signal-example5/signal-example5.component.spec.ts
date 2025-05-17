import { TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import SignalExample5Component from './signal-example5.component';

describe('Example 5', () => {
  let component: SignalExample5Component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SignalExample5Component, CommonModule, MatButtonModule],
    }).compileComponents();
    component = TestBed.createComponent(SignalExample5Component).componentInstance;
  });


  it('should initialize example 5', () => {
    expect(component).toBeTruthy();
  });

  it('intial todo count is 0', () => {
    expect(component.todos().length).toEqual(0);
  });
  
  it('Update todo count to 1', () => {
    component.updateTodos('Test 1');
    expect(component.todos().length).toEqual(1);
  });

});

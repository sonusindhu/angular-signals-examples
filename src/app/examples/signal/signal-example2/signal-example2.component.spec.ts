import { TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import SignalExample2Component from './signal-example2.component';

describe('Example 2', () => {
  let component: SignalExample2Component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SignalExample2Component, CommonModule, MatButtonModule],
    }).compileComponents();
    component = TestBed.createComponent(
      SignalExample2Component
    ).componentInstance;
  });

  it('should initialize example 2', () => {
    expect(component).toBeTruthy();
  });

  it('count initialized with 0', () => {
    expect(component.count()).toEqual(0);
  });
});

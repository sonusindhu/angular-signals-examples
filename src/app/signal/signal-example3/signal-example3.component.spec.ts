import { TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import SignalExample3Component from './signal-example3.component';

describe('Example 3', () => {
  let component: SignalExample3Component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SignalExample3Component, CommonModule, MatButtonModule],
    }).compileComponents();
    component = TestBed.createComponent(SignalExample3Component).componentInstance;
  });


  it('should initialize example 3', () => {
    expect(component).toBeTruthy();
  });

  it('intial name is Sonu Sindhu', () => {
    expect(component.name()).toEqual('Sonu Sindhu');
  });
  
  it('Update name to Darpan Sindhu', () => {
    component.updateName('Darpan Sindhu');
    expect(component.name()).toEqual('Darpan Sindhu');
  });

});

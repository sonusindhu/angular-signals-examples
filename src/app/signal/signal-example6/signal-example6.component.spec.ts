import { TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import SignalExample6Component from './signal-example6.component';

describe('Example 6', () => {
  let component: SignalExample6Component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SignalExample6Component, CommonModule, MatButtonModule],
    }).compileComponents();
    component = TestBed.createComponent(SignalExample6Component).componentInstance;
  });


  it('should initialize example 6', () => {
    expect(component).toBeTruthy();
  });

  it('intial username is Sonu Sindhu', () => {
    expect(component.username()).toEqual('Sonu Sindhu');
  });
  
  // it('Update todo username to Darpan Sindhu', () => {
  //   component.username.update('Darpan Sindhu');
  //   expect(component.username()).toEqual('Darpan Sindhu');
  // });

});

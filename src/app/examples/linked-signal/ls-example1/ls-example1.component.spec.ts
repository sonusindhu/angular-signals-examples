import { ComponentFixture, TestBed } from '@angular/core/testing';

import LsExample1Component from './ls-example1.component';

describe('Example1ComponentComponent', () => {
  let component: LsExample1Component;
  let fixture: ComponentFixture<LsExample1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LsExample1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LsExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

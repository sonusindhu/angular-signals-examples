import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsExample2Component } from './ls-example2.component';

describe('LsExample2Component', () => {
  let component: LsExample2Component;
  let fixture: ComponentFixture<LsExample2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LsExample2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LsExample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

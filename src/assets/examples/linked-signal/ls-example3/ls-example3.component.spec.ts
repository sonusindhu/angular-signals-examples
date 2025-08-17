import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsExample3Component } from './ls-example3.component';

describe('LsExample3Component', () => {
  let component: LsExample3Component;
  let fixture: ComponentFixture<LsExample3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LsExample3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LsExample3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

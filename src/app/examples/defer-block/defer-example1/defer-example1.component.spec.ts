import { ComponentFixture, TestBed } from '@angular/core/testing';

import DeferExample1Component from './defer-example1.component';

describe('DeferExample1Component', () => {
  let component: DeferExample1Component;
  let fixture: ComponentFixture<DeferExample1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferExample1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeferExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

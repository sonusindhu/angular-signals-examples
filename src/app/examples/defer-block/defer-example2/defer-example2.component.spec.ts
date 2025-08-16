import { ComponentFixture, TestBed } from '@angular/core/testing';

import DeferExample2Component from './defer-example2.component';

describe('DeferExample2Component', () => {
  let component: DeferExample2Component;
  let fixture: ComponentFixture<DeferExample2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferExample2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeferExample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

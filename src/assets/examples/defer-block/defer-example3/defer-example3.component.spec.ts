import { ComponentFixture, TestBed } from '@angular/core/testing';

import DeferExample3Component from './defer-example3.component';

describe('DeferExample3Component', () => {
  let component: DeferExample3Component;
  let fixture: ComponentFixture<DeferExample3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferExample3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeferExample3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

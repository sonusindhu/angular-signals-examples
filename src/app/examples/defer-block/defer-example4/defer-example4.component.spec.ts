import { ComponentFixture, TestBed } from '@angular/core/testing';

import DeferExample4Component from './defer-example4.component';

describe('DeferExample4Component', () => {
  let component: DeferExample4Component;
  let fixture: ComponentFixture<DeferExample4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferExample4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeferExample4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

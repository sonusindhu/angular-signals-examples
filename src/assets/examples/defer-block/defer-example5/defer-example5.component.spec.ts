import { ComponentFixture, TestBed } from '@angular/core/testing';

import DeferExample5Component from './defer-example5.component';

describe('DeferExample5Component', () => {
  let component: DeferExample5Component;
  let fixture: ComponentFixture<DeferExample5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferExample5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeferExample5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

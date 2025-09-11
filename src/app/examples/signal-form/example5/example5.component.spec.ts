import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormExample5Component } from './example5.component';

describe('FormExample5Component', () => {
  let component: FormExample5Component;
  let fixture: ComponentFixture<FormExample5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormExample5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormExample5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

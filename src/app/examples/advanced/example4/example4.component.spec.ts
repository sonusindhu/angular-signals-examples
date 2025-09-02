import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AdvancedExample4Component } from './example4.component';

describe('AdvancedExample4Component', () => {
  let component: AdvancedExample4Component;
  let fixture: ComponentFixture<AdvancedExample4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [AdvancedExample4Component]
    }).compileComponents();

    fixture = TestBed.createComponent(AdvancedExample4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable and enable the form via signal', () => {
    expect(component.form.enabled).toBeTrue();
    component.disabledSignal.set(true);
    fixture.detectChanges();
    // The form should be disabled when signal is true
    expect(component.form.disabled).toBeTrue();
    component.disabledSignal.set(false);
    fixture.detectChanges();
    // The form should be enabled again
    expect(component.form.enabled).toBeTrue();
  });
});

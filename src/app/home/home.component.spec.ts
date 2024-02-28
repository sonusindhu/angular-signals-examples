import { TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home.component';

describe('Home Component', () => {
  let component: HomeComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomeComponent, CommonModule, MatButtonModule],
    }).compileComponents();
    component = TestBed.createComponent(HomeComponent).componentInstance;
  });


  it('should initialize home component', () => {
    expect(component).toBeTruthy();
  });

  it('We have great than 0 signals examples', () => {
    expect(component.examples().length).toBeGreaterThan(0);
  });

});

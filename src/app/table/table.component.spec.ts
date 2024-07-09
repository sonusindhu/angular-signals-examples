import { ComponentFixture, TestBed } from '@angular/core/testing';

import TableComponent from './table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        TableComponent
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create table component', () => {
    expect(component).toBeTruthy();
  });
});

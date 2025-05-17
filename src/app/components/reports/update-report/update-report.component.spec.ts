import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReportComponent } from './update-report.component';

describe('UpdateReportComponent', () => {
  let component: UpdateReportComponent;
  let fixture: ComponentFixture<UpdateReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateReportComponent]
    });
    fixture = TestBed.createComponent(UpdateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

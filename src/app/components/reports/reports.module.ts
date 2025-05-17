import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { AddReportComponent } from './add-report/add-report.component';
import { UpdateReportComponent } from './update-report/update-report.component';
import { ReportListComponent } from './report-list/report-list.component';


@NgModule({
  declarations: [
    AddReportComponent,
    UpdateReportComponent,
    ReportListComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }

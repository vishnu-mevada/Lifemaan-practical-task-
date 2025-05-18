import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportListComponent } from './report-list/report-list.component';
import { AddReportComponent } from './add-report/add-report.component';
import { UpdateReportComponent } from './update-report/update-report.component';
import { RoleGuard } from 'src/app/shared/utils/role-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: ReportListComponent,
    canActivate: [RoleGuard],
    data: { roles: ['admin', 'editor', 'viewer'] },
  },
  {
    path: 'add',
    component: AddReportComponent,
    canActivate: [RoleGuard],
    data: { roles: ['admin', 'editor'] },
  },
  {
    path: 'update/:id',
    component: UpdateReportComponent,
    canActivate: [RoleGuard],
    data: { roles: ['admin', 'editor'] },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsRoutingModule {}

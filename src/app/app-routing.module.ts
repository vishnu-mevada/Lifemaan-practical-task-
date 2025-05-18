import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error403Component } from './components/sessions/403.component';
import { Error404Component } from './components/sessions/404.component';
import { Error500Component } from './components/sessions/500.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { RoleGuard } from './shared/utils/role-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'report',
    loadChildren: () =>
      import('./components/reports/reports.module').then(
        (m) => m.ReportsModule
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./components/user/user.module').then((m) => m.UserModule),
    canActivate: [RoleGuard],
    data: { roles: ['admin'] },
  },
  {
    path: 'project',
    loadChildren: () =>
      import('./components/project/project.module').then(
        (m) => m.ProjectModule
      ),
  },
  { path: 'about', component: AboutComponent },
  { path: '403', component: Error403Component },
  { path: '**', component: Error404Component },
  { path: '500', component: Error500Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

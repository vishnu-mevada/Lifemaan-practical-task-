import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { RoleGuard } from 'src/app/shared/utils/role-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: ProjectListComponent,
    canActivate: [RoleGuard],
    data: { roles: ['admin', 'editor', 'viewer'] },
  },
  {
    path: 'add',
    component: AddProjectComponent,
    canActivate: [RoleGuard],
    data: { roles: ['admin', 'editor'] },
  },
  {
    path: 'update/:id',
    component: UpdateProjectComponent,
    canActivate: [RoleGuard],
    data: { roles: ['admin', 'editor'] },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    UpdateProjectComponent,
    AddProjectComponent,
    ProjectListComponent,
  ],
  imports: [CommonModule, ProjectRoutingModule, SharedModule],
})
export class ProjectModule {}

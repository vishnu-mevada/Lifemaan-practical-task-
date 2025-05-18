import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ProjectService } from 'src/app/shared/services/project.service';
import { RoleService } from 'src/app/shared/services/role.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent {
  allColumns: string[] = ['id', 'name', 'status', 'actions'];
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<any>();
  role: string = '';

  constructor(
    private projectService: ProjectService,
    private roleService: RoleService,
    private notify: NotificationService
  ) {}

  ngOnInit(): void {
    this.loadProjects();
    this.roleService.currentRole$.subscribe((role) => {
      this.role = role;
      this.displayedColumns =
        role === 'viewer'
          ? this.allColumns.filter((col) => col !== 'actions')
          : [...this.allColumns];
    });
  }

  loadProjects() {
    this.projectService.getProjects().subscribe((projects) => {
      this.dataSource.data = projects;
    });
  }

  deleteProject(project: any) {
    if (confirm(`Delete project "${project.name}"?`)) {
      this.projectService.deleteProject(project.id).subscribe(() => {
        this.notify.success('Project deleted successfully');
        this.loadProjects();
      });
    }
  }

  canAdd(): boolean {
    return this.role === 'admin';
  }

  canEdit(): boolean {
    return this.role === 'admin' || this.role === 'editor';
  }

  canDelete(): boolean {
    return this.role === 'admin';
  }
}

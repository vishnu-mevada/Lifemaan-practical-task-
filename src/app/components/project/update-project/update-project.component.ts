import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormField } from 'src/app/shared';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ProjectService } from 'src/app/shared/services/project.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.scss'],
})
export class UpdateProjectComponent {
  projectId: any;
  project: any = [];
  projectFields: FormField[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService,
    private notify: NotificationService
  ) {
    this.projectId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.projectService.getProjectById(this.projectId).subscribe((data) => {
      this.project = data;
      this.projectFields = [
        { name: 'id', value: this.project.id, readonly: true },
        {
          name: 'name',
          value: this.project.name,
          validators: [Validators.required],
        },
        {
          name: 'status',
          value: this.project.status,
          validators: [Validators.required],
        },
      ];
    });
  }

  handleSubmit(formData: any) {
    this.projectService.updateProject(formData).subscribe((response) => {
      this.notify.success('Project updated successfully');
      this.router.navigate(['/project']);
    });
  }
}

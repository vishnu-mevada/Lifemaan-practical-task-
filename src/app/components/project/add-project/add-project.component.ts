import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormField } from 'src/app/shared';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ProjectService } from 'src/app/shared/services/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
})
export class AddProjectComponent {
  constructor(private projectService: ProjectService, private router: Router, private notify: NotificationService) {}

  projectFields: FormField[] = [
    { name: 'id', readonly: true },
    { name: 'name', validators: [Validators.required] },
    { name: 'status', validators: [Validators.required] },
  ];

  handleSubmit(formData: any) {
    this.projectService.addProject(formData).subscribe((response) => {
      this.notify.success('Project added successfully');
      this.router.navigate(['/project']);
    });
  }
}

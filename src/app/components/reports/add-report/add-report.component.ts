import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormField } from 'src/app/shared';
import { ReportService } from 'src/app/shared/services/report.service';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.scss'],
})
export class AddReportComponent {
  constructor(private reportService: ReportService, private router: Router) {}

  reportFields: FormField[] = [
    { name: 'id', readonly: true },
    { name: 'title', validators: [Validators.required] },
    { name: 'content', validators: [Validators.required] },
  ];

  handleSubmit(formData: any) {
    this.reportService.addReport(formData).subscribe((response) => {
      this.router.navigate(['/report']);
    });
  }
}

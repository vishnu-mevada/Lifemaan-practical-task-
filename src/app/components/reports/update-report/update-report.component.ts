import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormField } from 'src/app/shared';
import { ReportService } from 'src/app/shared/services/report.service';

@Component({
  selector: 'app-update-report',
  templateUrl: './update-report.component.html',
  styleUrls: ['./update-report.component.scss'],
})
export class UpdateReportComponent {
  reportId: any;
  report: any = [];
  reportFields: FormField[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reportService: ReportService
  ) {
    this.reportId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.reportService.getReportById(this.reportId).subscribe((data) => {
      this.report = data;
      this.reportFields = [
        { name: 'id', value: this.report.id, readonly: true },
        {
          name: 'title',
          value: this.report.title,
          validators: [Validators.required],
        },
        {
          name: 'content',
          value: this.report.content,
          validators: [Validators.required],
        },
      ];
    });
  }

  handleSubmit(formData: any) {
    this.reportService.updateReport(formData).subscribe((response) => {
      this.router.navigate(['/report']);
    });
  }
}

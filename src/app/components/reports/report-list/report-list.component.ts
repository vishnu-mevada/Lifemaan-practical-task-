import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ReportService } from 'src/app/shared/services/report.service';
import { RoleService } from 'src/app/shared/services/role.service';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss'],
})
export class ReportListComponent {
  allColumns: string[] = ['id', 'title', 'content', 'actions'];
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<any>();
  role: string = '';

  constructor(
    private reportService: ReportService,
    private roleService: RoleService,
    private notify: NotificationService
  ) {}

  ngOnInit(): void {
    this.loadReports();
    this.roleService.currentRole$.subscribe((role) => {
      this.role = role;
      this.displayedColumns =
        role === 'viewer'
          ? this.allColumns.filter((col) => col !== 'actions')
          : [...this.allColumns];
    });
  }

  loadReports() {
    this.reportService.getReports().subscribe({
      next: (reports) => {
        this.dataSource.data = reports;
      },
      error: (err) => {
        if (err.status == 0) {
          this.notify.error('Please check your internet connection or make sure the JSON server is running.')
        } else {
          this.notify.error(err.message);
        }
      },
    });
  }

  deleteReport(report: any) {
    if (confirm(`Delete report "${report.title}"?`)) {
      this.reportService.deleteReport(report.id).subscribe(() => {
        this.notify.success('Report deleted successfully');
        this.loadReports();
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

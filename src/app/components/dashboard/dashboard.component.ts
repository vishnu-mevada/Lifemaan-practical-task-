import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  selectedRole: string = 'Admin';

  userRoles = [
    { value: 'admin', viewValue: 'Admin' },
    { value: 'editor', viewValue: 'Editor' },
    { value: 'viewer', viewValue: 'Viewer' },
  ];
}

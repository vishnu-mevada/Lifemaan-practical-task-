import { Component } from '@angular/core';
import { RoleService } from 'src/app/shared/services/role.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  selectedRole = '';

  constructor(private roleService: RoleService) {
    this.roleService.currentRole$.subscribe(role => {
      this.selectedRole = role ?? 'admin';
    });
  }
}

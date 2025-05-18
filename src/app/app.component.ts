import { Component } from '@angular/core';
import { RoleService } from './shared/services/role.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
  }

  roles = ['admin', 'editor', 'viewer'];
  selectedRole = '';

  routeConfig = [
    {
      path: '',
      label: 'Home',
      icon: 'home',
      roles: ['admin', 'editor', 'viewer'],
    },
    {
      path: 'user',
      label: 'Users',
      icon: 'supervised_user_circle',
      roles: ['admin'],
    },
    {
      path: 'report',
      label: 'Reports',
      icon: 'table',
      roles: ['admin', 'editor', 'viewer'],
    },
    {
      path: 'project',
      label: 'Projects',
      icon: 'perm_media',
      roles: ['admin', 'editor', 'viewer'],
    },
    {
      path: 'about',
      label: 'About Us',
      icon: 'help',
      roles: ['admin', 'editor', 'viewer'],
    },
    {
      path: 'contact',
      label: 'Contact Us',
      icon: 'call',
      roles: ['admin', 'editor', 'viewer'],
    },
  ];

  accessibleRoutes: any = [];

  constructor(private roleService: RoleService, private router: Router) {
    this.roleService.currentRole$.subscribe((role) => {
      this.selectedRole = role ?? 'admin';
    });
  }

  ngOnInit() {
    this.roleService.currentRole$.subscribe((role) => {
      this.selectedRole = role;
      this.accessibleRoutes = this.routeConfig.filter((route) =>
        route.roles.includes(role)
      );
    });
  }

  onRoleChange(event: any) {
    this.selectedRole = event.value;
    this.roleService.setRole(this.selectedRole);

    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}

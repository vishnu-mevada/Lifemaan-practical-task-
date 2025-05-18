import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { RoleService } from 'src/app/shared/services/role.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  displayedColumns: string[] = ['id', 'name', 'email', 'actions'];
  dataSource = new MatTableDataSource<any>();
  role: string = '';

  constructor(
    private userService: UserService,
    private roleService: RoleService,
    private notify: NotificationService
  ) {}

  ngOnInit(): void {
    this.loadUsers();
    this.roleService.currentRole$.subscribe((role) => {
      this.role = role;
    });
  }

  loadUsers() {
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.dataSource.data = users;
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

  deleteUser(user: any) {
    if (confirm(`Delete user ${user.name}?`)) {
      this.userService.deleteUser(user.id).subscribe(() => {
        this.notify.success('User deleted successfully');
        this.loadUsers();
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

import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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
    private roleService: RoleService
  ) {}

  ngOnInit(): void {
    this.loadUsers();
    this.roleService.currentRole$.subscribe((role) => {
      this.role = role;
    });
  }

  loadUsers() {
    this.userService.getUsers().subscribe((users) => {
      this.dataSource.data = users;
    });
  }

  editUser(user: any) {
    alert(`Edit user ${user.name}`);
    // Open a dialog or route to edit page
  }

  deleteUser(user: any) {
    if (confirm(`Delete user ${user.name}?`)) {
      this.userService.deleteUser(user.id).subscribe(() => {
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

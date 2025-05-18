import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormField } from 'src/app/shared';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent {
  constructor(private userService: UserService, private router: Router, private notify: NotificationService) {}

  userFields: FormField[] = [
    { name: 'id', readonly: true },
    { name: 'name', validators: [Validators.required] },
    {
      name: 'email',
      validators: [Validators.required, Validators.email],
      type: 'email',
    },
  ];

  handleSubmit(formData: any) {
    this.userService.addUser(formData).subscribe(response => {
      this.notify.success('User added successfully');
      this.router.navigate(['/user']);
    });
  }
}

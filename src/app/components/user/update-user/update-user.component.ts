import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormField } from 'src/app/shared';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent {
  userId: any;
  user: any = [];
  userFields: FormField[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private notify: NotificationService) {
    this.userId =  this.route.snapshot.paramMap.get('id');
  }

   ngOnInit(): void {
    this.userService.getUserById(this.userId).subscribe(data => {
      this.user = data;
      this.userFields = [
        { name: 'id', value: this.user.id, readonly: true },
        {
          name: 'name',
          value: this.user.name,
          validators: [Validators.required],
        },
        {
          name: 'email',
          value: this.user.email,
          validators: [Validators.required, Validators.email], type: 'email',
        },
      ];
    });
  }

   handleSubmit(formData: any) {
    this.userService.updateUser(formData).subscribe(response => {
      this.notify.success('User updated successfully');
      this.router.navigate(['/user']);
    });
  }
}

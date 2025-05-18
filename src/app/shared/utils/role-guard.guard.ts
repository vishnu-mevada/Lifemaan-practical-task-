import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { RoleService } from '../services/role.service';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  constructor(private roleService: RoleService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const allowedRoles = route.data['roles'] as string[];
    const currentRole = this.roleService.getRole();

    if (allowedRoles.includes(currentRole)) {
      return true;
    }

    this.router.navigate(['/403']);
    return false;
  }
}

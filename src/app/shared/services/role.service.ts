import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const ROLE_KEY = 'userRole';

@Injectable({ providedIn: 'root' })
export class RoleService {
  private roleSubject = new BehaviorSubject<string>(this.getSavedRole());
  currentRole$ = this.roleSubject.asObservable();

  private getSavedRole(): string {
    return localStorage.getItem(ROLE_KEY) || 'admin'; // default to admin
  }

  setRole(role: string) {
    localStorage.setItem(ROLE_KEY, role);
    this.roleSubject.next(role);
  }

  getRole(): string {
    return this.roleSubject.getValue();
  }
}

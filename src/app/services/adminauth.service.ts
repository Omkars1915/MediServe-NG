import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService implements CanActivate {

  constructor(private adminservice: AdminService, private router: Router) { }
  canActivate() {
    if (this.adminservice.isadminlogged()) {
      return true;
    } else {
      this.router.navigate([''])
      return false;
    }
  }
}

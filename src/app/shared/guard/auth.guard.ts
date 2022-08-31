import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { SharedService } from '../service/shared.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad, CanActivate {
  constructor(private service: SharedService, private router: Router) {}
  canLoad(): boolean {
    if (this.service.isLoggedIn()) {
      return true;
    }

    this.router.navigateByUrl('/login');
    return false;
  }

  canActivate(): boolean {
    if (this.service.isLoggedIn()) {
      return true;
    }

    this.router.navigateByUrl('/login');
    return false;
  }
}

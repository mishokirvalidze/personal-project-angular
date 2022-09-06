import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Helper } from '../helper/helper';

@Injectable({
  providedIn: 'root',
})
export class CompleteGuard implements CanActivate {
  constructor(private route: Router) {}
  canActivate(): boolean {
    if (Helper.isNextStep) {
      return true;
    }
    this.route.navigateByUrl('/');
    return false;
  }
}

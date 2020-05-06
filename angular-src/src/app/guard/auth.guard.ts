import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

import { AuthService } from '../service/auth.service';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  canActivate(
    next: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot):  Promise<boolean | UrlTree> | boolean | UrlTree {
     // AUTHGUARD FOR PREVENING UNAUTHORISERD USERS
      if(this.authService.loggedIn()){
        return true
      }
      else{
        this.router.navigate(['/login']);
        return false
      }
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]):  Promise<boolean> | boolean {
    return true;
  }

  constructor(private authService : AuthService,
              private router : Router){


  }

  



}

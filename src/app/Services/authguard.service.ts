import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private router:Router,private jwtHelper:JwtHelperService,) { }
  canActivate(route, state:RouterStateSnapshot) {
      const token=localStorage.getItem("jwt");
      if(token&&!this.jwtHelper.isTokenExpired(token)){
        return true
      }
      this.router.navigate(["register"],{queryParams:{returnUrl:state.url}});
      return false
  }
}

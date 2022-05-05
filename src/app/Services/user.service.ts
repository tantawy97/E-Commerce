import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SignInUser } from '../models/SignInUser.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private BaseUrl="http://localhost:5155/api/user";
  constructor(private jwtHelper:JwtHelperService,private myclient:HttpClient) { }

SignIn( user:SignInUser){
return this.myclient.post(`${this.BaseUrl}/signin`,user)
}
isUserAuthenticated(){
  const token:string=localStorage.getItem("jwt");
  if(token&&!this.jwtHelper.isTokenExpired(token))
  return true;
  else
  return false;
}
}

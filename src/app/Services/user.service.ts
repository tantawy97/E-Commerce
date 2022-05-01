import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignInUser } from '../models/SignInUser.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private BaseUrl="http://localhost:5155/api/user";
  constructor(private myclient:HttpClient) { }

SignIn( user:SignInUser){
return this.myclient.post(`${this.BaseUrl}/signin`,user)
}

}

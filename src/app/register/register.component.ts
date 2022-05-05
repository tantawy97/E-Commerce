import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute,private jwtHelper:JwtHelperService,private loginservice:UserService) { }

  ngOnInit(): void {
  }
  login =true
signup=false
invalidLogin:boolean

loginForm:FormGroup=new FormGroup({
'email':new FormControl(null,[Validators.required]),
'password':new FormControl(null,[Validators.required])
})
LogIn(){

  this.loginservice.SignIn({
    email:this.loginForm.value.email,
    password:this.loginForm.value.password
  }).subscribe(
    res=>{
      const token=(<any>res).token;
      localStorage.setItem("jwt",token);
      this.invalidLogin=false;
      let returnUrl=this.route.snapshot.queryParamMap.get('returnUrl');
      this.router.navigate([returnUrl||"/"]);

    },
    err=>{
      this.invalidLogin=true
    }
  )
}

isUserAuthenticated(){
  const token:string=localStorage.getItem("jwt");
  if(token&&this.jwtHelper.isTokenExpired(token))
  return true;
  else
  return false;
}


signin(){
this.login=true;
this.signup=false;
}
register(){
  this.login=false;
  this.signup=true;
  }
}

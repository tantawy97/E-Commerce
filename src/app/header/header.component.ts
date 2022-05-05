import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from '../Services/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuStatus=false;
  searchStatus = false;
  loginStatus = false;
  cartStatus = false;
  signup=false;
  opennav=false;
filter=false;
invalidLogin:boolean


loginForm:FormGroup=new FormGroup({
'email':new FormControl(null,[Validators.required]),
'password':new FormControl(null,[Validators.required])
})
  constructor(public loginservice:UserService,private router:Router, private route: ActivatedRoute,private jwtHelper:JwtHelperService) { }

  ngOnInit(): void {
  }
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

  checkAuth(){


  }

  logout(){
localStorage.removeItem("jwt");
this.router.navigate(["/"]);
  }







  onMenuBtnClicked() {
    this.menuStatus = !this.menuStatus;
    this.searchStatus = false;
    this.loginStatus = false;
    this.cartStatus = false;
  }

  onSearchBtnClicked() {
    this.menuStatus = false;
    this.searchStatus = !this.searchStatus;
    this.loginStatus = false;
    this.cartStatus = false;
  }

  onCartBtnClicked() {
    this.menuStatus = false;
    this.searchStatus = false;
    this.loginStatus = false;
    this.cartStatus = !this.cartStatus;
    if(!this.loginservice.isUserAuthenticated()){
      this.router.navigate(["register"]);
    }
  }

  onLoginBtnClicked() {
    this.menuStatus = false;
    this.searchStatus = false;
    this.loginStatus = !this.loginStatus;
    this.cartStatus = false;
  }


  closeAll() {
    this.menuStatus=false;
    this.searchStatus = false;
    this.loginStatus = false;
    this.cartStatus = false;
  }
  onlink(){
    this.loginStatus = false;
  }
   openNav() {
    this.opennav=!this.opennav

  }
  openFilter(){
    this.filter=!this.filter
  }





}





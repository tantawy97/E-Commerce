import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swiper from 'swiper';
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
  constructor(private loginservice:UserService,private router:Router) { }

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
        this.router.navigate(["/"]);
        console.log(res)
      },
      err=>{
        this.invalidLogin=true
      }
    )
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





import { Component, OnInit, Output } from '@angular/core';
import Swiper from 'swiper';
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
filter=false
  constructor() { }

  ngOnInit(): void {
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





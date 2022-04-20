import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  login =true
signup=false
signin(){
this.login=true;
this.signup=false;
}
register(){
  this.login=false;
  this.signup=true;
  }
}

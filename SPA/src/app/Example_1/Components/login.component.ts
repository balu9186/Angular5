import {Component} from "@angular/core";

@Component({
  templateUrl:'./login.component.html'
})

export class LoginComponent{
  data;
  constructor(){
    this.data="Welcome to Login page !!";
  }
}

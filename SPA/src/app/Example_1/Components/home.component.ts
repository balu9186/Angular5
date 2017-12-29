import {Component} from "@angular/core";

@Component({
  templateUrl:'./home.component.html'
})

export class HomeComponent{
  data;
  constructor(){
    this.data="Welcome to Home page !!";
  }
}

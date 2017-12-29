import {Component} from "@angular/core";

@Component({
  templateUrl:'./default.component.html'
})

export class DefaultComponent{
  data;
  constructor(){
    this.data="Welcome to default page !!";
  }
}

import {Component} from "@angular/core";

@Component({
  templateUrl:'./page.one.component.html'
})

export class PageOneComponent{
  data:string;

  constructor(){
    this.data="Welcome to Page Component";
  }
}

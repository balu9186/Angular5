import {Component} from "@angular/core";
import {MyService} from "../Services/my.service";

@Component({
  templateUrl:'./pagetwo.component.html'
})

export class PagetwoComponent{
  data:any;

  constructor(private __myService:MyService){
    this.data = this.__myService.getData().var_two;
  }
}

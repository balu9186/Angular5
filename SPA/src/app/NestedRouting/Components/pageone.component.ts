import {Component} from "@angular/core";
import {MyService} from "../Services/my.service";

@Component({
  templateUrl:'./pageone.component.html'
})

export class PageoneComponent{
  data:any;

  constructor(private __myService:MyService){
    this.data = this.__myService.getData().var_one;
  }
}

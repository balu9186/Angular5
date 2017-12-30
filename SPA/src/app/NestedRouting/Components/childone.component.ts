import {Component} from "@angular/core";
import {MyService} from "../Services/my.service";

@Component({
  templateUrl:'./childone.component.html'
})

export class ChildoneComponent{
  data:any;

  constructor(private __myService:MyService){
    this.data = this.__myService.getData().var_three;
  }
}

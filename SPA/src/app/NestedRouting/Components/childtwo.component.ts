import {Component} from "@angular/core";
import {MyService} from "../Services/my.service";

@Component({
  templateUrl:'./childtwo.component.html'
})

export class ChildtwoComponent{
  data:any;

  constructor(private __myService:MyService){
    this.data = this.__myService.getData().var_four;
  }
}

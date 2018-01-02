import {Component} from "@angular/core";

@Component({
  templateUrl:'./angularjs.component.html'
})

export class AngularjsComponent{
  data:any;
  constructor(){
    this.data="Msg from AngualrJS component";
  }
}

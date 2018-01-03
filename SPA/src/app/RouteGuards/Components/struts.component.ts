import {Component} from "@angular/core";

@Component({
  templateUrl:'./struts.component.html'
})

export class StrutsComponent{
  data:any;

  constructor(){
    this.data="Msg from struts";
  }
}

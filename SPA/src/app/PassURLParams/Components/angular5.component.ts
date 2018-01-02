import {Component} from "@angular/core";

@Component({
  templateUrl:'./angular5.component.html'
})

export class Angular5Component{
  data:any;
  constructor(){
    this.data="Msg from Angular5 component";
  }
}

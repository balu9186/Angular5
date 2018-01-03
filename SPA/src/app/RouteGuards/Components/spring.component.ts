import {Component} from "@angular/core";

@Component({
  templateUrl:'./spring.component.html'
})

export class SpringComponent{
  data:any;

  constructor(){
    this.data = "Msg from Spring";
  }
}

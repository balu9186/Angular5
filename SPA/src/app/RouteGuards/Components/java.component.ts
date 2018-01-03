import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  templateUrl:'./java.component.html'
})

export class JavaComponent{
  data:any;
  constructor(private __router:Router){
    this.data="Msg from java";
  }

  gotoSpring(){
    this.__router.navigate(["/java/spring"]);
  }

  gotoStruts(){
    this.__router.navigate(["/java/struts"]);
  }


}

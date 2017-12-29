import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector:'spa-app',
  templateUrl:'./index.component.html'
})

export class IndexComponent{

  constructor(private __router:Router){

  }

  gotoFinalPage(){
    this.__router.navigate(["/final"]);
  }

}

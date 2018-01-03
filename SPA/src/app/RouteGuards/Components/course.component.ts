import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector:'spa-app',
  templateUrl:'./course.component.html'
})

export class CourseComponent{

constructor(private __router:Router){

}

gotoJava(){
  this.__router.navigate(["/java"]);
}

gotoDotnet(){
  this.__router.navigate(["/dotnet"]);
}
}

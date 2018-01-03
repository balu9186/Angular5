import {Component} from "@angular/core";

@Component({
  templateUrl:'./dotnet.component.html'
})

export class DotnetComponent{
  data:any;

  constructor(){
    this.data="Msg from Dot net";
  }
}

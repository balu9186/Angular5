import {Component} from "@angular/core";
import {GetExampleService} from "../Services/get.example.service";

@Component({
  selector:'get-example',
  templateUrl:'./get.example.component.html'
})

export class GetExampleComponent{
  data:any;

  constructor(private __getExSer:GetExampleService){

    this.__getExSer.getData().subscribe(res=>this.data=res,err=>console.log(err));

  }
}

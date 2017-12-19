import {Component} from "@angular/core";
import {GetNodeService} from "../Services/get.node.service";

@Component({
  selector:'get-node',
  templateUrl:'./get.node.component.html'
})

export class GetNodeComponent{
  data:any;

  constructor(private __GetNodeServ:GetNodeService){
    this.__GetNodeServ.getData().subscribe(
      res=>this.data=res,
      err=>console.log(err)
    );
  }
}

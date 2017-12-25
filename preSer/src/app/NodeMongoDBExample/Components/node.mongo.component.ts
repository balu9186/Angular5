import {Component} from "@angular/core";
import {NodeMongoService} from "../Services/node.mongo.service";

@Component({
  selector:'node-mongo',
  templateUrl:'./node.mongo.component.html'
})

export class NodeMongoComponent{
  data:any;
  errMsg:any;

  constructor(private __nodeMongoServ:NodeMongoService){
    this.__nodeMongoServ.getData().subscribe(
      res=>this.data=res,
      err=>this.errMsg=err
    );
  }
}

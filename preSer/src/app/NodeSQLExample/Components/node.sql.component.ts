import {Component} from "@angular/core";
import {NodeSqlService} from "../Services/node.sql.service";

@Component({
  selector:'node-sql',
  templateUrl:'./node.sql.component.html'
})

export class NodeSqlComponent{
  data:any;

  constructor(private __nodeSqlSer:NodeSqlService){
    this.__nodeSqlSer.getData().subscribe(
      res=>this.data=res,
      err=>console.log(err)
    );
  }
}

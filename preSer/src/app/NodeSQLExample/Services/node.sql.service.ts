import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class NodeSqlService{
  data:any;

  constructor(private __http:Http){

  }

  getData(){
    return this.__http.get("http://localhost:8080/newsql")
      .map((res:Response)=>this.data=res.json().recordset);
  }
}

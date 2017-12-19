import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class GetNodeService{
  data:any;

  constructor(private __http:Http){

  }

  getData(){
    return this.__http.get("http://localhost:8080/static")
      .map((res:Response)=>this.data=res.json().products);
  }
}

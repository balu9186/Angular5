import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class NodeMongoService{
  data:any;

  constructor(private __http:Http){

  }

  getData(){
    return this.__http.get("http://localhost:8080/mongoex")
      .map((res:Response)=>this.data=res.json())
        .catch(this.__errorHandling);
  }

  __errorHandling(error:Response){
    console.error(error);
    return Observable.throw(error || "Server Error");
  }
}

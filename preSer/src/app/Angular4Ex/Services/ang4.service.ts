import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class Ang4Service{
  data:any;

  constructor(private __http:HttpClient){

  }

  getData(){
    return this.__http.get("http://localhost:5000/products")
      .map((res:Response)=>this.data=res)
      .catch(this.__handleError);
  }

  __handleError(error:Response){
    console.log(error);
    return Observable.throw(error || "Server error");
  }
}

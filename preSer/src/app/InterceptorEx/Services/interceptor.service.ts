import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class InterceptorService{
  data:any;

  constructor(private __httpClient:HttpClient){

  }

  getData(){
   return this.__httpClient.get("https://www.w3schools.com/angular/customers.php")
      .map((res:Response)=>this.data=res)
      .catch(this.__handleError);
  }

  __handleError(err:Response){
    console.error(err || "Server error");
    return Observable.throw(err);
  }
}

import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class PostExampleService{
  data:any;

  constructor(private __http:Http){

  }

  getData(obj){
    return this.__http.post("http://test-routes.herokuapp.com/test/uppercase",obj)
      .map((res:Response)=>this.data=res.json());
  }


}

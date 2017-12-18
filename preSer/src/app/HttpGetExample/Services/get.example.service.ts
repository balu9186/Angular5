import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class GetExampleService{
  data:any;

  constructor(private __http:Http){

  }

  getData(){
    return this.__http.get("http://demosoft.highgrowth.in/test/jsonexample.php")
      .map((res:Response)=>this.data=res.json().posts);
  }

}

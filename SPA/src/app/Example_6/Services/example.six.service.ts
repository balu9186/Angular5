import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import 'rxjs/Rx';

@Injectable()
export class ExampleSixService{
  data:any;

  constructor(private _http:HttpClient){

  }

  /*https://restcountries.eu/rest/v2/all*/
  getData(){
    return this._http.get("https://restcountries.eu/rest/v2/name/united")
      .map((res:Response)=>this.data=res);

    /*return "from service call";*/
  }
}

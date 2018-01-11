import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import 'rxjs/Rx';

@Injectable()
export class CountryService{
  data:any;

  constructor(private _http:HttpClient){

  }

  getData(){
    return this._http.get("https://restcountries.eu/rest/v2/all")
      .map((res:Response)=>this.data=res);
  }
}

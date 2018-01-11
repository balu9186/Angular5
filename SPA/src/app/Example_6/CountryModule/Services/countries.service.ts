import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import 'rxjs/Rx';

@Injectable()
export class CountriesService{
  data:any;

  constructor(private _http:HttpClient){

  }

  getCountriesData(){
    return this._http.get("https://restcountries.eu/rest/v2/name/india")
      .map((res:Response)=>this.data=res,
        err=>console.error(err));
  }
}

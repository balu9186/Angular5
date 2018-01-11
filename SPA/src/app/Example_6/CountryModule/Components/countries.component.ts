import {Component} from "@angular/core";
import {CountriesService} from "../Services/countries.service";

@Component({
  selector:'country-search',
  templateUrl:'./countries.component.html'
})

export class CountriesComponent{
  data:any;

  constructor(private _countryServ:CountriesService){

  }

  ngOnInit(){
    this._countryServ.getCountriesData()
      .subscribe(res=>this.data=res);
  }
}

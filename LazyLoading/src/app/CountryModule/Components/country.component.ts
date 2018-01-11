import {Component} from "@angular/core";
import {CountryService} from "../Services/country.service";

@Component({
  selector:'lazy-load',
  templateUrl:'./country.component.html'
})

export class CountryComponent{
  data:any;

  constructor(private _countryServ:CountryService){

  }

  ngOnInit(){
    this._countryServ.getData()
      .subscribe(res=>this.data=res,
        err=>console.log(err));
  }
}

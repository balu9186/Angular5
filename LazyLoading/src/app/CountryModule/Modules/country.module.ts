import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {CountryComponent} from "../Components/country.component";
import {CountryService} from "../Services/country.service";

import {Routes,RouterModule} from "@angular/router";
import {countryRoute} from "../Routes/country.route";

/*export const countriesRoute:Routes=[
  {path:"",redirectTo:"country",pathMatch:"full"},
  {path:"country",component:CountryComponent}
];*/

@NgModule({
  declarations:[CountryComponent],
  imports:[CommonModule
    /*,RouterModule.forChild(countriesRoute)*/
    ,countryRoute
  ],
  providers:[CountryService],
  exports:[CountryComponent]
})

export class CountryModule{

}

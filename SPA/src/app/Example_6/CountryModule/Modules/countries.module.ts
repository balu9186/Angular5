import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {CountriesComponent} from "../Components/countries.component";
import {CountriesService} from "../Services/countries.service";

@NgModule({
  declarations:[CountriesComponent],
  imports:[CommonModule],
  providers:[CountriesService],
  exports:[CountriesComponent]
})

export class CountriesModule{

}

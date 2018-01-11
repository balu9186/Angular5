import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

import {CountryComponent} from "../Components/country.component";

const cRoutes:Routes=[
  {path:"",redirectTo:"country",pathMatch:"full"},
  {path:"country",component:CountryComponent}
];

export const countryRoute:ModuleWithProviders=RouterModule.forChild(cRoutes);

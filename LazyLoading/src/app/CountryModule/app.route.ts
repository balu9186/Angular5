import {Routes,RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

import {PageOneComponent} from "./page.one.component";

const apRoutes:Routes=[
  {path:"page_one",component:PageOneComponent},
  {path:"lazy",loadChildren:'./CountryModule/Modules/country.module#CountryModule'}
];

export const appRoute:ModuleWithProviders=RouterModule.forRoot(apRoutes);

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import {HttpClientModule} from "@angular/common/http";
import {Routes,RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {PageOneComponent} from "./CountryModule/page.one.component";
import {appRoute} from "./CountryModule/app.route";


/*export const mainRouting:ModuleWithProviders=RouterModule.forRoot([
  {path:"page_one",component:PageOneComponent},
  {path:"lazy",loadChildren:"./CountryModule/Modules/country.module#CountryModule"}
]);*/


@NgModule({
  declarations: [
    AppComponent,PageOneComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
    /*,mainRouting*/
    ,appRoute
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

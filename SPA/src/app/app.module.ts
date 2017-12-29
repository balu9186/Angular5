import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes} from "@angular/router";
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';

import {IndexComponent} from "./Example_1/Components/index.component";
import {LoginComponent} from "./Example_1/Components/login.component";
import {HomeComponent} from "./Example_1/Components/home.component";
import {DefaultComponent} from "./Example_1/Components/default.component";
import {FinalComponent} from "./Example_1/Components/final.component";
import {routes} from "./Example_1/Routes/routes";

@NgModule({
  declarations: [
    AppComponent,IndexComponent,LoginComponent,HomeComponent,DefaultComponent,FinalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [IndexComponent]
})
export class AppModule { }

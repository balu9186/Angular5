import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";


import { AppComponent } from './app.component';

import {CustomerComponent} from "./Components/customer.component";
import {GridComponent} from "./Components/grid.component";


@NgModule({
  declarations: [
    AppComponent,CustomerComponent,GridComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";


import { AppComponent } from './app.component';
import {GetExampleComponent} from "./HttpGetExample/Components/get.example.component";
import {GetExampleService} from "./HttpGetExample/Services/get.example.service";

import { PostExampleComponent } from "./HttpPostExample/Components/post.example.component";
import { PostExampleService } from "./HttpPostExample/Services/post.example.service";


@NgModule({
  declarations: [
    AppComponent,
    GetExampleComponent,
    PostExampleComponent
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule
  ],
  providers: [GetExampleService,PostExampleService],
  bootstrap: [PostExampleComponent]
})
export class AppModule { }

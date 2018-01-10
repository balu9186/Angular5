import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
/*import {Routes} from "@angular/router";*/
import {RouterModule} from "@angular/router";

import {ExampleSixModule} from "./Example_6/Modules/example.six.module";
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';

import {IndexComponent} from "./Example_1/Components/index.component";
import {LoginComponent} from "./Example_1/Components/login.component";
import {HomeComponent} from "./Example_1/Components/home.component";
import {DefaultComponent} from "./Example_1/Components/default.component";
import {FinalComponent} from "./Example_1/Components/final.component";
import {routes} from "./Example_1/Routes/routes";

import {PageoneComponent} from "./NestedRouting/Components/pageone.component";
import {PagetwoComponent} from "./NestedRouting/Components/pagetwo.component";
import {ChildoneComponent} from "./NestedRouting/Components/childone.component";
import {ChildtwoComponent} from "./NestedRouting/Components/childtwo.component";
import {MainComponent} from "./NestedRouting/Components/main.component";
import {appRoutes} from "./NestedRouting/Routes/app.routes";
import {MyService} from "./NestedRouting/Services/my.service";

import {MainurlparamsComponent} from "./PassURLParams/Components/mainurlparams.component";
import {AngularjsComponent} from "./PassURLParams/Components/angularjs.component";
import {Angular5Component} from "./PassURLParams/Components/angular5.component";
import {JavascriptComponent} from "./PassURLParams/Components/javascript.component";
import {routePar} from "./PassURLParams/Routes/app.routes";

import {CourseComponent} from "./RouteGuards/Components/course.component";
import {JavaComponent} from "./RouteGuards/Components/java.component";
import {SpringComponent} from "./RouteGuards/Components/spring.component";
import {StrutsComponent} from "./RouteGuards/Components/struts.component";
import {DotnetComponent} from "./RouteGuards/Components/dotnet.component";
import {rgroute} from "./RouteGuards/Routes/app.routes";
import {AuthGuard} from "./RouteGuards/RGServices/auth.guard";




@NgModule({
  declarations: [
    AppComponent,IndexComponent,LoginComponent,HomeComponent,DefaultComponent,FinalComponent,
    PageoneComponent,PagetwoComponent,ChildoneComponent,ChildtwoComponent,MainComponent,
    MainurlparamsComponent,AngularjsComponent,Angular5Component,JavascriptComponent,
    CourseComponent,JavaComponent,SpringComponent,StrutsComponent,DotnetComponent
  ],
    imports: [
    BrowserModule,
    RouterModule.forRoot(rgroute),
    ExampleSixModule,HttpClientModule
  ],
  providers: [MyService,AuthGuard],
  bootstrap: [AppComponent]

})
export class AppModule { }

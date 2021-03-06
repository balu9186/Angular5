import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {HttpClientModule,HTTP_INTERCEPTORS} from "@angular/common/http";


import { AppComponent } from './app.component';
import {GetExampleComponent} from "./HttpGetExample/Components/get.example.component";
import {GetExampleService} from "./HttpGetExample/Services/get.example.service";

import { PostExampleComponent } from "./HttpPostExample/Components/post.example.component";
import { PostExampleService } from "./HttpPostExample/Services/post.example.service";

import {GetNodeComponent} from "./HttpGetNodeServer/Components/get.node.component";
import {GetNodeService} from "./HttpGetNodeServer/Services/get.node.service";

import {NodeSqlComponent} from "./NodeSQLExample/Components/node.sql.component";
import {NodeSqlService} from "./NodeSQLExample/Services/node.sql.service";

import {NodeMongoComponent} from "./NodeMongoDBExample/Components/node.mongo.component";
import {NodeMongoService} from "./NodeMongoDBExample/Services/node.mongo.service";

import {Ang4Service} from "./Angular4Ex/Services/ang4.service";
import {Ang4Component} from "./Angular4Ex/Components/ang4.component";

import {MyInterceptor} from "./InterceptorEx/Interceptors/my.interceptor";
import {InterceptorComponent} from "./InterceptorEx/Components/interceptor.component";
import {InterceptorService} from "./InterceptorEx/Services/interceptor.service";


@NgModule({
  declarations: [
    AppComponent,
    GetExampleComponent,
    PostExampleComponent,
    GetNodeComponent,
    NodeSqlComponent,
    NodeMongoComponent,
    Ang4Component,
    InterceptorComponent
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule,HttpClientModule
  ],
  providers: [GetExampleService,PostExampleService,GetNodeService,NodeSqlService,NodeMongoService,Ang4Service,InterceptorService,
    {provide:"HTTP_INTERCEPTORS", useClass:MyInterceptor, multi:true}
  ],
  bootstrap: [NodeSqlComponent]
})
export class AppModule { }


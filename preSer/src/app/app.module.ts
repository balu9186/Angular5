import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

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


@NgModule({
  declarations: [
    AppComponent,
    GetExampleComponent,
    PostExampleComponent,
    GetNodeComponent,
    NodeSqlComponent,
    NodeMongoComponent,
    Ang4Component
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule,HttpClientModule
  ],
  providers: [GetExampleService,PostExampleService,GetNodeService,NodeSqlService,NodeMongoService,Ang4Service],
  bootstrap: [Ang4Component]
})
export class AppModule { }

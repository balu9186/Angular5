import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";


import { AppComponent } from './app.component';
import {GetExampleComponent} from "./HttpGetExample/Components/get.example.component";
import {GetExampleService} from "./HttpGetExample/Services/get.example.service";

import { PostExampleComponent } from "./HttpPostExample/Components/post.example.component";
import { PostExampleService } from "./HttpPostExample/Services/post.example.service";

import {GetNodeComponent} from "./HttpGetNodeServer/Components/get.node.component";
import {GetNodeService} from "./HttpGetNodeServer/Services/get.node.service";

import {NodeSqlComponent} from "./NodeSQLExample/Components/node.sql.component";
import {NodeSqlService} from "./NodeSQLExample/Services/node.sql.service";


@NgModule({
  declarations: [
    AppComponent,
    GetExampleComponent,
    PostExampleComponent,
    GetNodeComponent,
    NodeSqlComponent
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule
  ],
  providers: [GetExampleService,PostExampleService,GetNodeService,NodeSqlService],
  bootstrap: [NodeSqlComponent]
})
export class AppModule { }

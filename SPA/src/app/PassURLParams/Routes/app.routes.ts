import {Routes} from "@angular/router";

import {AngularjsComponent} from "../Components/angularjs.component";
import {Angular5Component} from "../Components/angular5.component";
import {JavascriptComponent} from "../Components/javascript.component";

export const routePar:Routes=[
  {path:'angularjs',component:AngularjsComponent
    ,children:[{path:'javascript/:param1',component:JavascriptComponent}]},
  {path:'angular5',component:Angular5Component}
];

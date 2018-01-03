import {Routes} from "@angular/router";

import {JavaComponent} from "../Components/java.component";
import {SpringComponent} from "../Components/spring.component";
import {StrutsComponent} from "../Components/struts.component";
import {DotnetComponent} from "../Components/dotnet.component";
import {AuthGuard} from "../RGServices/auth.guard";

export const rgroute:Routes=[
  {path:"java",component:JavaComponent,canActivate:[AuthGuard],canActivateChild:[AuthGuard]
    ,children:[{path:"spring",component:SpringComponent},{path:"struts",component:StrutsComponent}]},
  {path:"dotnet",component:DotnetComponent,canActivate:[AuthGuard]}
];

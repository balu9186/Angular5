
import {Routes} from "@angular/router";
import {LoginComponent} from "../Components/login.component";
import {HomeComponent} from "../Components/home.component";
import {DefaultComponent} from "../Components/default.component";
import {FinalComponent} from "../Components/final.component";

export const routes:Routes=[
  {path:"",component:DefaultComponent},
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"final",component:FinalComponent}
]

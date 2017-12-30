import {Routes} from "@angular/router";

import {PageoneComponent} from "../Components/pageone.component";
import {PagetwoComponent} from "../Components/pagetwo.component";
import {ChildoneComponent} from "../Components/childone.component";
import {ChildtwoComponent} from "../Components/childtwo.component";

export const appRoutes = [
  {path:"pageone",component:PageoneComponent,children:[{path:"childone",component:ChildoneComponent}]},
  {path:"pagetwo",component:PagetwoComponent,children:[{path:"childtwo",component:ChildtwoComponent}]}
]

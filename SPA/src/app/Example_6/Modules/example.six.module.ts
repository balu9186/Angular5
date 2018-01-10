import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {ExampleSixComponent} from "../Components/example.six.component";
import {ExampleSixService} from "../Services/example.six.service";

@NgModule({
  declarations:[ExampleSixComponent],
  imports:[CommonModule],
  providers:[ExampleSixService],
  exports:[ExampleSixComponent]

})

export class ExampleSixModule{

}

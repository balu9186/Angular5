import {Injectable} from "@angular/core";

@Injectable()
export class MyService{

  constructor(){

  }
  getData(){
    return {
      "var_one":"Variable one msg from custom service",
      "var_two":"Variable two msg from custom service",
      "var_three":"Variable three msg from custom service",
      "var_four":"Variable four msg from custom service"
    };
  }
}

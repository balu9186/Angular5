import {Customer} from "../Models/customer";
import {Lead} from "../Models/customer";
import {Injectable} from "@angular/core";

@Injectable()
export class FactoryCustomer{
  Create(TypeOfCustomer):Customer{
    if(TypeOfCustomer == "Customer"){
      return new Customer();
    }
    else{
      return new Lead();
    }
  }
}

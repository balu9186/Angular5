import {Component} from "@angular/core";
import {Customer} from "../Models/customer";

@Component({
  selector:'cust-app',
  templateUrl:'./customer.component.html'
})

export class CustomerComponent{
  currCust:Customer=new Customer();

  customers:Array<Customer>=new Array<Customer>();

  Add(){
    this.customers.push(this.currCust);
    this.customers=this.customers.slice();
    this.currCust=new Customer();
  }

  Select(custSelected:Customer){
    this.currCust=Object.assign({},custSelected);
  }

  Update(){
    for(let cust of this.customers){
      if(cust.customercode == this.currCust.customercode){
        cust.customername=this.currCust.customername;
        cust.customeramount=this.currCust.customeramount;
      }
    }
    this.currCust=new Customer();
  }

  Clear(){
    this.currCust=new Customer();
  }
}

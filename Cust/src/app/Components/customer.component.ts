import {Component} from "@angular/core";
import {Customer} from "../Models/customer";
import {FactoryCustomer} from "../Services/FactoryCustomer";

@Component({
  providers:[FactoryCustomer],
  selector:'cust-app',
  templateUrl:'./customer.component.html'
})

export class CustomerComponent{
  currCust:Customer=null;
  factoryCustomer:FactoryCustomer=null;
  Customertype:string="Customer";
  updatedType:string="";

  OnCustomerTypeChange(_typeOfCustomer){
    this.Customertype = _typeOfCustomer;
    this.currCust = this.factoryCustomer.Create(this.Customertype);
    this.currCust.customertype = this.Customertype;
  }

  constructor(_factoryCustomer : FactoryCustomer){
    this.factoryCustomer = _factoryCustomer;
    this.currCust = this.factoryCustomer.Create(this.Customertype);
    this.currCust.customertype = this.Customertype;
  }

  customers:Array<Customer>=new Array<Customer>();

  Add(){
    this.customers.push(this.currCust);
    this.customers=this.customers.slice();
    this.currCust=this.factoryCustomer.Create(this.Customertype);
    this.currCust.customertype = this.Customertype;
  }

  Select(custSelected:Customer){
    /*this.currCust=Object.assign({},custSelected);*/
    this.currCust = this.factoryCustomer.Create(custSelected.customertype);
    this.currCust.customercode = custSelected.customercode;
    this.currCust.customername=custSelected.customername;
    this.currCust.customeramount=custSelected.customeramount;
    this.currCust.customertype=custSelected.customertype;
  }

  Update(){

    for(let cust of this.customers){
      if(cust.customercode == this.currCust.customercode){
        cust.customername=this.currCust.customername;
        cust.customeramount=this.currCust.customeramount;
        this.updatedType = this.currCust.customertype;
      }
    }
    this.currCust=this.factoryCustomer.Create(this.updatedType);
    this.currCust.customertype = this.updatedType;
  }

  Clear(){
    this.currCust=this.factoryCustomer.Create(this.Customertype);
    this.currCust.customertype = this.Customertype;
  }
}

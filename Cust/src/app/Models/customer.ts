export class Customer{
  customertype:string="";
  customercode:string="";
  customername:string="";
  customeramount:number=0;

  IsValid():boolean{
    if(this.customercode.length == 0){
      return false;
    }
    if(this.customername.length == 0){
      return false;
    }

    if(this.customeramount <= 0){
      return false;
    }
    return true;
  }
}

export class Lead extends Customer{
  IsValid():boolean{
    if(this.customercode.length == 0){
      return false;
    }
    if(this.customername.length == 0){
      return false;
    }


    return true;
  }
}

import {Component} from "@angular/core";
import {Ang4Service} from "../Services/ang4.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Error} from "tslint/lib/error";

@Component({
  selector:'ang-four',
  templateUrl:'./ang4.component.html'
})

export class Ang4Component{
  data:any;

  constructor(private __ang4Serv:Ang4Service){

    this.__ang4Serv.getData()
      .subscribe(
        res=>
        {
          this.data=res;
        },(err:HttpErrorResponse)=>
        {
          if(err.error instanceof Error)
          {
            console.log("server error raised");
          }else
          {
            console.log("client side error");
          }
        }
      );

  }
}

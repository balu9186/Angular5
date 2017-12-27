import {Component} from "@angular/core";
import {InterceptorService} from "../Services/interceptor.service";

@Component({
  selector:'inter-cep',
  templateUrl:'./interceptor.component.html'
})

export class InterceptorComponent{
  data:any;

  constructor(private __interServ:InterceptorService){
    this.__interServ.getData()
      .subscribe(res=>this.data=res,
        err=>console.log(err));
  }
}

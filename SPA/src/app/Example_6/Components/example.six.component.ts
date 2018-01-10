import {Component} from "@angular/core";
import {ExampleSixService} from "../Services/example.six.service";

@Component({
  selector:'lazy-root',
  templateUrl:'./example.six.component.html'
})

export class ExampleSixComponent {
  data:any;

  constructor(private _ex6Serv:ExampleSixService){

  }

  ngOnInit(){
    this._ex6Serv.getData()
      .subscribe(res=>this.data=res,
        err=>console.error(err));

    /*this.data=this._ex6Serv.getData();*/
  }
}

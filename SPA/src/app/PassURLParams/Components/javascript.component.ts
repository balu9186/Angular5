import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
  templateUrl:'./javascript.component.html'
})

export class JavascriptComponent{
  data:any;
  obserdata:any;
  constructor(private __actRoute:ActivatedRoute){
    //this.data="Msg from Javascript component";

    //this.data = this.__actRoute.snapshot.params['param1'];

    this.obserdata = this.__actRoute.params.subscribe(param=>{
      this.data=param['param1']
    });
  }

  ngOnDestroy(){
    this.obserdata.unsubscribe();
  }
}

import {Component} from "@angular/core";
import {PostExampleService} from "../Services/post.example.service";

@Component({
  selector:'post-example',
  templateUrl:'./post.example.component.html'
})

export class PostExampleComponent{
  data:any;

  constructor(private __postExServ:PostExampleService){

  }

  sendData(obj){
    this.__postExServ.getData(obj).subscribe(
      res=>this.data=res,
      err=>console.log(err)
    );
  }
}

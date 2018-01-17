import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userDetails:FormGroup;

  ngOnInit(){
    this.userDetails = new FormGroup({
      fname : new FormControl('',[Validators.required,Validators.minLength(5)]),
      lname : new FormControl(),
      email : new FormControl('',[Validators.required]),
      addr : new FormGroup({
        addr1 : new FormControl(),
        addr2 : new FormControl()
      }),
      country : new FormControl('',[Validators.required])
    });
  }

  details(){
    console.log(this.userDetails.value);
  }


}

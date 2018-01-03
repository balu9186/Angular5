import {Injectable} from "@angular/core";
import {CanActivate,CanActivateChild} from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild{

  canActivate():boolean{
    return confirm("Do you want to navigate to next page?");
    //return true;
  }

  canActivateChild():boolean{
    return confirm("Do you want to navigate to child page?");
    //return true;
  }
}

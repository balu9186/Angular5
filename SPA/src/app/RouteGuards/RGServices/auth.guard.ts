import {Injectable} from "@angular/core";
import {CanActivate,CanActivateChild,CanDeactivate} from "@angular/router";
import {JavaComponent} from "../Components/java.component";
import {DotnetComponent} from "../Components/dotnet.component";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild,CanDeactivate<[JavaComponent,DotnetComponent]>{

  canActivate():boolean{
    return confirm("Do you want to navigate to next page?");
    //return true;
  }

  canActivateChild():boolean{
    return confirm("Do you want to navigate to child page?");
    //return true;
  }

  canDeactivate():boolean{
    return confirm("Do you want to leave this page?");
  }
}

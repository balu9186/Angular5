import {Injectable} from "@angular/core";
import {HttpRequest,HttpResponse,HttpHandler,HttpEvent,HttpInterceptor} from "@angular/common/http";
import {Observable} from "rxjs/Observable";


@Injectable()
export class MyInterceptor implements HttpInterceptor{
  intercept(request:HttpRequest<any>, handler:HttpHandler): Observable<HttpEvent<any>>{
    console.log("Msg from Interceptor");

    /*const req1 = request.clone({
      setHeaders:{
        Authorization:'ABC123456'
      }
    });*/

    /*const req2 = request.clone({
      body:request.body.replace('abc')
    });*/

    console.log("After clone");
    return handler.handle(request);
  }
}

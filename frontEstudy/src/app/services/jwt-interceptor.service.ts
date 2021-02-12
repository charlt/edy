import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { UsuarioService } from './usuario.service';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class JwtInterceptorService implements HttpInterceptor {

  constructor(private _usuarioService: UsuarioService, private router: Router) { }
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = this.addToken(request); 
    return next.handle(request).pipe(            
      tap(event => {
        if (event instanceof HttpResponse) {          
          if (event.body.status == 0 && event.body.msg == 'Expired token' && event.url.search('notificacion') == -1) {
            localStorage.removeItem('jwt');
            this._usuarioService.tokenExpired.emit({expired: true});     
          }else if (event.body.status == 0 && event.body.msg == 'Wrong number of segments') {
            this.router.navigateByUrl('/login');
          }
        }
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 ) {
          // console.log("error");
        }
        return throwError(error);
      })
    )
  }

  addToken(request: HttpRequest<any>) {
    var token = this._usuarioService.getJWT();
    if (token == null) token = '';  
    // if (token) {      
    if (request.method.toLowerCase() == 'get') {
      request = request.clone({
        params: request.params.set('jwt', token)
      });
    }else if (request.method.toLowerCase() == 'post') {
      if (request.body instanceof FormData) {
        request =  request.clone({
          body: request.body.append('jwt', token)
        })
      }
    }     
    // }
    return request;
  }

}

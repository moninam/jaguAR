import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../service/token.service';
import { AuthService } from '../service/auth.service';

@Injectable({
    providedIn: 'root'
})
export class ProdInterceptorService implements HttpInterceptor {

    constructor(private tokenService: TokenService,
                private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        let intReq = req;
        const token = this.tokenService.getToken();
        if (token != null) {
            intReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token)});
        }
        return next.handle(intReq);
    }
}

export const interceptorProvider = [{provide: HTTP_INTERCEPTORS, useClass: ProdInterceptorService, multi: true}];
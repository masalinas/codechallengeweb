import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {        
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with Bearer auth credentials if available
        const currentAccessToken = this.authenticationService.currentUserTokenValue;

        if (currentAccessToken) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${currentAccessToken}`
                }
            });
        }

        return next.handle(request);
    }
}
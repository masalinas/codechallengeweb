import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { DefaultService } from '@app/shared/backend/api/api';
import { TokenBody } from '@app/shared/backend/model/models';
import { InlineResponse200 } from '@app/shared/backend/model/models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserAccessToken: BehaviorSubject<string>;

    constructor(private defaultService: DefaultService) {
        this.currentUserAccessToken = new BehaviorSubject<string>(localStorage.getItem('codechallengewed-token'));
    }

    public get currentUserTokenValue(): string {        
        return this.currentUserAccessToken.value;
    }

    login(username: string, password: string) {
        const tokenBody: TokenBody = { username: username,  password: password };

        return this.defaultService.login(tokenBody).pipe(
            map((response: InlineResponse200) => {        
                localStorage.setItem('codechallengewed-token', response.accessToken);
                this.currentUserAccessToken.next(response.accessToken);

                return response.accessToken;
            }),
            catchError(err => {
                return throwError(err);
            }));
    }         

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('codechallengewed-token');
        this.currentUserAccessToken.next(null);
    }
}
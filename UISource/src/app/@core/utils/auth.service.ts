import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {
    private auth0: auth0.WebAuth = null;

    constructor(public router: Router) {
        this.auth0 = new auth0.WebAuth({
            clientID: environment.clientId,
            domain: environment.auth_domain,
            responseType: 'token id_token',
            audience: environment.audience,
            redirectUri: environment.auth_callback,
            scope: environment.auth_scope,
        });
    }

    public handleAuthentication(): void {

        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                console.log('oks');
                this.setSession(authResult);
                this.router.navigate(['/pages']);

            } else if (err) {
                console.log(err);
            }
        });

        const millisecondsToWait = 1000;
        setTimeout(function () {
        }, millisecondsToWait);
    }

    public login(): void {
        this.auth0.authorize();
    }

    public getAccessToken(): string {
        return sessionStorage.getItem('access_token');
    }

    private setSession(authResult): void {
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        sessionStorage.setItem('access_token', authResult.accessToken);
        sessionStorage.setItem('id_token', authResult.idToken);
        sessionStorage.setItem('expires_at', expiresAt);
    }

    public logout(): void {
        sessionStorage.removeItem('access_token');
        sessionStorage.removeItem('id_token');
        sessionStorage.removeItem('expires_at');
        window.location.replace('/');        
    }

    public isAuthenticated(): boolean {
        const expire = sessionStorage.getItem('expires_at');
        if (!expire) {
            return false;
        }
        const expiresAt = JSON.parse(sessionStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }
}

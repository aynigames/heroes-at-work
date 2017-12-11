import { HttpClient, HttpHeaders, HttpErrorResponse, HttpHandler, HttpParams } from '@angular/common/http';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { Http, Headers, RequestOptionsArgs, Request, Response, ConnectionBackend, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AuthService } from './auth.service';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

@Injectable()
export class AyniHttpService {
    constructor(protected client: HttpClient,
        protected authservice: AuthService) {
    }

    private setAuthentication(headers: HttpHeaders): HttpHeaders {
        if (!this.authservice.isAuthenticated()) {
            sessionStorage.setItem('sysmessage.id', '1403');
            window.location.href = environment.session_end_url;            
        }
        const access_token = this.authservice.getAccessToken();
        headers = headers.set('Authorization', 'Bearer ' + access_token);
        return headers;
    }
    private setJsonHttpOptions(): HttpHeaders {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return headers;
    }
    PostJson(url: string, payload?: any) {
        let headers = this.setJsonHttpOptions();
        headers = this.setAuthentication(headers);
        return this.client.post(url, payload, { headers: headers });
    }
    get<T>(url: string): Observable<T> {
        let headers = new HttpHeaders();
        headers = this.setAuthentication(headers);
        return this.client.get<T>(url, { headers: headers });
    }
    put(url: string, body?: any | null): Observable<Object> {
        let headers = new HttpHeaders();
        headers = this.setAuthentication(headers);
        return this.client.put(url, body, { headers: headers });
    }
    delete(url: string): Observable<Object> {
        let headers = new HttpHeaders();
        headers = this.setAuthentication(headers);
        return this.client.delete(url, { headers: headers });
    }
}


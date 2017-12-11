import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AyniHttpService } from 'app/@core/utils/aynihttp.service';
import { AyniService } from '../ayni.service';
import 'rxjs/add/observable/of';
import { Member } from 'app/models/member';

const counter = 0;

@Injectable()
export class MemberService extends AyniService {
    constructor(protected ayniHttpService: AyniHttpService) {
        super();
    }
    getCurrent(): Observable<Member> {
        return this.ayniHttpService.get<Member>('/api/members/current');
    }
}

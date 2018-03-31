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
        /***Dummy Data****/
        const m = new Member();
        const respDummy = {'memberId': 171, 'fullName': 'paolo paolo', 'email': 'paolo@aynilab.com', 'score': 0.0, 
        'profileImageUrl': 'https://scontent.flim6-1.fna.fbcdn.net/v/t1.0-9/12742773_10153645892413001_2885613928400234587_n.jpg?_nc_cat=0&_nc_eui2=v1' +
        '%3AAeH9ZiudUwl1sdm_QXojVBk6o2H05vU8uPP1xMj1IxGw_8FR7FiLLVECYECviNha63GpIgkaeAwCD4beLYfRxwtxeu49q53Xc1GOkBUJG2qu9g&_nc_pt=1&oh=9b3be642d88f03b' +
        '46eb8de96c8c3bbe4&oe=5B412FA2'};
        Object.assign(m, respDummy);
        return new Observable<Member>(observer => {
            observer.next(m);
        });
        /***End Dummy Data****/

        // return this.ayniHttpService.get<Member>('/api/members/current');
    }
}

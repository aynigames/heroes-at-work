import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';

import { Observable } from 'rxjs/Observable';
import { AyniHttpService } from 'app/@core/utils/aynihttp.service';
// export class Track {
//   name: string;
//   artist: string;
//   url: string;
//   cover: string;
// }

@Injectable()
export class GameService {

  constructor(protected aynihttpservice: AyniHttpService) { }

  getCurrentUserGames(): Observable<any[]> {
    return this.aynihttpservice.get<any[]>('/api/games');
  }
}

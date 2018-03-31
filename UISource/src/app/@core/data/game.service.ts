import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';

import { Observable } from 'rxjs/Observable';
import { AyniHttpService } from 'app/@core/utils/aynihttp.service';
import { Game } from 'app/models/game';
import { Organization } from 'app/models/organization';
// export class Track {
//   name: string;
//   artist: string;
//   url: string;
//   cover: string;
// }

@Injectable()
export class GameService {

  constructor(protected aynihttpservice: AyniHttpService) { }

  getCurrentUserGames(): Observable<Game[]> {
    return this.aynihttpservice.get<Game[]>('/api/games');
  }

  getGame(gameId: number): Observable<Game> { 
    return this.aynihttpservice.get<Game>('/api/games/' + gameId);
  } 

  addPoints(playerId: Number, points: any): Observable<any> {
    return this.aynihttpservice.PostJson('/api/players/' + playerId + '/points', points);
  }

}

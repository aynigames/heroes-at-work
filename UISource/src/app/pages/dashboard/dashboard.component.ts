import { Component, OnInit } from '@angular/core';
import { GameService } from 'app/@core/data/game.service';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit  {

  constructor(private gameService: GameService) {
  } 

  public gameList: any[];

  ngOnInit(): void {
    this.gameService.getCurrentUserGames().subscribe(res => {
      
      res.forEach(el => {
          el.urlDetail = '/game';
          el.leaderBoard = [{
            'memberId': 155,
            'playerId': 0,
            'fullName': 'Felipe Pacora',
            'avatar': 'assets/images/nick.png',
            'playerScore': 0,
            'giverScore': 0,
            'tags': null,
          },
          {
            'memberId': 134,
            'playerId': 0,
            'fullName': 'Gregory Valderrama',
            'avatar': 'assets/images/jack.png',
            'playerScore': 0,
            'giverScore': 0,
            'tags': null,
          },
          {
            'memberId': 136,
            'playerId': 0,
            'fullName': 'Olga Zegarra',
            'avatar': 'assets/images/eva.png',
            'playerScore': 0,
            'giverScore': 0,
            'tags': null,
          },
          {
            'memberId': 188,
            'playerId': 0,
            'fullName': 'Miguel Koo',
            'avatar': 'assets/images/alan.png',
            'playerScore': 0,
            'giverScore': 0,
            'tags': null,
          }];
      });
      
      this.gameList = res;
    });
  }


}

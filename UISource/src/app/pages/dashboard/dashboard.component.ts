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
      this.gameList = res;
    });
  }


}

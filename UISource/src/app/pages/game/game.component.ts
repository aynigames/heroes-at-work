import { Component, OnInit } from '@angular/core';
import { GameService } from 'app/@core/data/game.service';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'ngx-game',
  styleUrls: ['./game.component.scss'],
  templateUrl: './game.component.html',
})
export class GameComponent implements OnInit  {

  temperature: number = 24;
  constructor(private gameService: GameService) {
  } 


  ngOnInit(): void {
    
  }


}

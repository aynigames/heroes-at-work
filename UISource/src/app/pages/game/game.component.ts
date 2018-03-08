import { Component, OnInit } from '@angular/core';
import { GameService } from 'app/@core/data/game.service';
import { forEach } from '@angular/router/src/utils/collection';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-game',
  styleUrls: ['./game.component.scss'],
  templateUrl: './game.component.html',
})
export class GameComponent implements OnInit  {
  public id: number;
  public game: any = {};

  constructor(        
    protected router: Router,
    private route: ActivatedRoute,
    private gameService: GameService) {
      this.id = +this.route.snapshot.paramMap.get('id');
  } 


  ngOnInit(): void {
    let self = this;
    this.gameService.getGame(this.id).subscribe(res => {
      self.game = res;
    });
  }


}

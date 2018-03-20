import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { GameService } from 'app/@core/data/game.service';
import { forEach } from '@angular/router/src/utils/collection';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-game',
  styleUrls: ['./game.component.scss'],
  templateUrl: './game.component.html',
})
export class GameComponent implements OnInit  {
  public id: number;
  public game: any = {};
  public dataPointToAdd: any = {};
  public pointList: Array<String> = ['1', '5', '10', '50'];
  @ViewChild('engineTemplate') private modalTemplate: TemplateRef<any>;
  constructor(        
    private modalService: NgbModal,
    protected router: Router,
    private route: ActivatedRoute,
    private gameService: GameService) {
      this.id = +this.route.snapshot.paramMap.get('id');
  } 


  ngOnInit(): void {
    const self = this;
    this.gameService.getGame(this.id).subscribe(res => {
      self.game = res;
    });
  }

  openModel(): Boolean {
    this.modalService.open(this.modalTemplate, {size: 'lg'}).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });    
    return false;
  }

  onChangePointCombo(point: string) { 
    this.dataPointToAdd.points = point;
  }

}

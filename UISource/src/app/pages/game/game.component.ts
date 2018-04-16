import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { GameService } from 'app/@core/data/game.service';
import { forEach } from '@angular/router/src/utils/collection';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MemberService } from 'app/@core/data/members.service';
import { Member } from 'app/models/member';
import { Game } from 'app/models/game';
import { Player } from 'app/models/player';

@Component({
  selector: 'ngx-game',
  styleUrls: ['./game.component.scss'],
  templateUrl: './game.component.html',
})
export class GameComponent implements OnInit  {
  public id: number;
  
  public game: Game = new Game();
  public currentMember: Member;
  public currentPlayer: Player = new Player();
  public dataPointToAdd: any = {};
  public pointList: Array<String> = ['1', '5', '10', '50'];
  public optionRemainingPoint: any = {};
  public optionCurrentScore: any = {};
  public optionDaysLeft: any = {};
  public currentIsPlaying: Boolean = false;
  public value: number = 80;



  
  @ViewChild('engineTemplate') private modalTemplate: TemplateRef<any>;
  constructor(        
    private modalService: NgbModal,
    protected router: Router,
    private route: ActivatedRoute,
    private gameService: GameService,
    private memberService: MemberService) {
      this.id = +this.route.snapshot.paramMap.get('id');
  } 


  ngOnInit(): void {
    const self = this;

    this.memberService.getCurrent().subscribe( resCurrent => {
      self.currentMember = resCurrent;
      self.loadGame();
    });
  }

  private loadGame(){
    const self = this;
    this.gameService.getGame(this.id).subscribe(res => {
      res.players.forEach(player => {
        if (player.memberId === self.currentMember.memberId){
          self.currentPlayer = player;
          self.currentIsPlaying = true;
        }
      });
      self.game = res;
      self.optionRemainingPoint = self.getChartOption(self.game.settings.allowed_points, self.currentPlayer.giverScore);
      self.optionCurrentScore = self.getChartOption(self.game.settings.allowed_points, self.currentPlayer.playerScore);

      self.optionDaysLeft = self.getChartOption(self.game.days, self.game.daysToEnd);
      const pointListCalc = [];
      [1, 5, 10, 25, 50].forEach( e => {
        if (e <= self.game.settings.allowed_points - self.currentPlayer.giverScore){
          pointListCalc.push(e);
        }
      });
      self.pointList = pointListCalc;
    });
  }

  openModel(player: any): Boolean {
    const self = this;
    this.modalService.open(this.modalTemplate, {size: 'lg'}).result.then((result) => {
      if (result.toLowerCase() === 'ok'){
        const pointObject = {
          'score': parseInt(this.dataPointToAdd.points, 10),
          'description': 'string',
          'tags': ['string'],
        };
        self.gameService.addPoints(player.playerId, pointObject).subscribe(() => {self.loadGame(); });

      }
    }, (reason) => {
    });    
    return false;
  }

  onChangePointCombo(point: string) { 
    this.dataPointToAdd.points = point;
  }

  private getChartOption(total: number, value: number): any{
    const optionChart: any = {};  
    optionChart.tooltip = { trigger: 'item', formatter: '{a} <br/>{b} : {c} ({d}%)'};
    optionChart.series = [ { name: ' ', clockWise: true, hoverAnimation: false, type: 'pie', center: ['45%', '50%'], radius: ['80%', '90%'], data: [] } ];
    optionChart.series[0].data = [
        {
          value: value,
          name: ' ',
          label: {
            normal: {
              position: 'center',
              formatter: '{d}%',
              textStyle: { fontSize: '22', fontFamily: 'Helvetica', fontWeight: '600', color: '#2a2a2a'},
            },
          },
          tooltip: { show: false },
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [ { offset: 0, color: '#42db7d' }, { offset: 1, color: '#42db7d' }]),
              shadowColor: 'rgba(0, 0, 0, 0)',
              shadowBlur: 0,
              shadowOffsetX: 0,
              shadowOffsetY: 3,
            },
          },
          hoverAnimation: false,
        },
        {
          value: total - value,
          name: ' ',
          tooltip: { show: false },
          label: {normal: { position: 'inner' } },
          itemStyle: { normal: { color: '#ebeff5' },
          },
        },
      ]; 
    return optionChart;
  }

}

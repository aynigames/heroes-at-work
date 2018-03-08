import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-game-card',
  styleUrls: ['./game-card.component.scss'],
  templateUrl: './game-card.component.html',
})
export class GameCardComponent {
  @Input() game: any;
}

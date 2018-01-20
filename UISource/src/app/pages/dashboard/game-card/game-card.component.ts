import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-game-card',
  styleUrls: ['./game-card.component.scss'],
  template: `
    <nb-card>
      <div class="details">
        <div class="title">{{ title }}</div>
        <div class="status">{{ on ? 'ON' : 'OFF' }}</div>
      </div>
    </nb-card>
  `,
})
export class GameCardComponent {

  @Input() title: string;
  @Input() type: string;
  @Input() on: boolean = true;
}

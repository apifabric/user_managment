import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './LoginHistory-card.component.html',
  styleUrls: ['./LoginHistory-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.LoginHistory-card]': 'true'
  }
})

export class LoginHistoryCardComponent {


}
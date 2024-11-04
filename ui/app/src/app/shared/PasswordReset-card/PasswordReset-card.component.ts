import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './PasswordReset-card.component.html',
  styleUrls: ['./PasswordReset-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.PasswordReset-card]': 'true'
  }
})

export class PasswordResetCardComponent {


}
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Otp-card.component.html',
  styleUrls: ['./Otp-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Otp-card]': 'true'
  }
})

export class OtpCardComponent {


}
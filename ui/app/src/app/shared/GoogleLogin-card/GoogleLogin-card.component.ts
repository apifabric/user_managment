import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './GoogleLogin-card.component.html',
  styleUrls: ['./GoogleLogin-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.GoogleLogin-card]': 'true'
  }
})

export class GoogleLoginCardComponent {


}
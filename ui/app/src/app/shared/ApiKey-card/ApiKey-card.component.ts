import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ApiKey-card.component.html',
  styleUrls: ['./ApiKey-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ApiKey-card]': 'true'
  }
})

export class ApiKeyCardComponent {


}
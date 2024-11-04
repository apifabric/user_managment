import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './UserSetting-card.component.html',
  styleUrls: ['./UserSetting-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.UserSetting-card]': 'true'
  }
})

export class UserSettingCardComponent {


}
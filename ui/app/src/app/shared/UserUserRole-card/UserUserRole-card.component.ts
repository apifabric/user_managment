import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './UserUserRole-card.component.html',
  styleUrls: ['./UserUserRole-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.UserUserRole-card]': 'true'
  }
})

export class UserUserRoleCardComponent {


}
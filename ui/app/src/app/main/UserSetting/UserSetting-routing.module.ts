import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSettingHomeComponent } from './home/UserSetting-home.component';
import { UserSettingNewComponent } from './new/UserSetting-new.component';
import { UserSettingDetailComponent } from './detail/UserSetting-detail.component';

const routes: Routes = [
  {path: '', component: UserSettingHomeComponent},
  { path: 'new', component: UserSettingNewComponent },
  { path: ':id', component: UserSettingDetailComponent,
    data: {
      oPermission: {
        permissionId: 'UserSetting-detail-permissions'
      }
    }
  }
];

export const USERSETTING_MODULE_DECLARATIONS = [
    UserSettingHomeComponent,
    UserSettingNewComponent,
    UserSettingDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSettingRoutingModule { }
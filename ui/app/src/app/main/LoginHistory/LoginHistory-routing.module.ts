import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginHistoryHomeComponent } from './home/LoginHistory-home.component';
import { LoginHistoryNewComponent } from './new/LoginHistory-new.component';
import { LoginHistoryDetailComponent } from './detail/LoginHistory-detail.component';

const routes: Routes = [
  {path: '', component: LoginHistoryHomeComponent},
  { path: 'new', component: LoginHistoryNewComponent },
  { path: ':id', component: LoginHistoryDetailComponent,
    data: {
      oPermission: {
        permissionId: 'LoginHistory-detail-permissions'
      }
    }
  }
];

export const LOGINHISTORY_MODULE_DECLARATIONS = [
    LoginHistoryHomeComponent,
    LoginHistoryNewComponent,
    LoginHistoryDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginHistoryRoutingModule { }
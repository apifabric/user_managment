import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordResetHomeComponent } from './home/PasswordReset-home.component';
import { PasswordResetNewComponent } from './new/PasswordReset-new.component';
import { PasswordResetDetailComponent } from './detail/PasswordReset-detail.component';

const routes: Routes = [
  {path: '', component: PasswordResetHomeComponent},
  { path: 'new', component: PasswordResetNewComponent },
  { path: ':id', component: PasswordResetDetailComponent,
    data: {
      oPermission: {
        permissionId: 'PasswordReset-detail-permissions'
      }
    }
  }
];

export const PASSWORDRESET_MODULE_DECLARATIONS = [
    PasswordResetHomeComponent,
    PasswordResetNewComponent,
    PasswordResetDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordResetRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtpHomeComponent } from './home/Otp-home.component';
import { OtpNewComponent } from './new/Otp-new.component';
import { OtpDetailComponent } from './detail/Otp-detail.component';

const routes: Routes = [
  {path: '', component: OtpHomeComponent},
  { path: 'new', component: OtpNewComponent },
  { path: ':id', component: OtpDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Otp-detail-permissions'
      }
    }
  }
];

export const OTP_MODULE_DECLARATIONS = [
    OtpHomeComponent,
    OtpNewComponent,
    OtpDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtpRoutingModule { }
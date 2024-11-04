import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleLoginHomeComponent } from './home/GoogleLogin-home.component';
import { GoogleLoginNewComponent } from './new/GoogleLogin-new.component';
import { GoogleLoginDetailComponent } from './detail/GoogleLogin-detail.component';

const routes: Routes = [
  {path: '', component: GoogleLoginHomeComponent},
  { path: 'new', component: GoogleLoginNewComponent },
  { path: ':id', component: GoogleLoginDetailComponent,
    data: {
      oPermission: {
        permissionId: 'GoogleLogin-detail-permissions'
      }
    }
  }
];

export const GOOGLELOGIN_MODULE_DECLARATIONS = [
    GoogleLoginHomeComponent,
    GoogleLoginNewComponent,
    GoogleLoginDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoogleLoginRoutingModule { }
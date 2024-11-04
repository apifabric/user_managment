import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserUserRoleHomeComponent } from './home/UserUserRole-home.component';
import { UserUserRoleNewComponent } from './new/UserUserRole-new.component';
import { UserUserRoleDetailComponent } from './detail/UserUserRole-detail.component';

const routes: Routes = [
  {path: '', component: UserUserRoleHomeComponent},
  { path: 'new', component: UserUserRoleNewComponent },
  { path: ':id', component: UserUserRoleDetailComponent,
    data: {
      oPermission: {
        permissionId: 'UserUserRole-detail-permissions'
      }
    }
  }
];

export const USERUSERROLE_MODULE_DECLARATIONS = [
    UserUserRoleHomeComponent,
    UserUserRoleNewComponent,
    UserUserRoleDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserUserRoleRoutingModule { }
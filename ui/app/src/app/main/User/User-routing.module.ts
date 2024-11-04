import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './home/User-home.component';
import { UserNewComponent } from './new/User-new.component';
import { UserDetailComponent } from './detail/User-detail.component';

const routes: Routes = [
  {path: '', component: UserHomeComponent},
  { path: 'new', component: UserNewComponent },
  { path: ':id', component: UserDetailComponent,
    data: {
      oPermission: {
        permissionId: 'User-detail-permissions'
      }
    }
  },{
    path: ':user_id/ApiKey', loadChildren: () => import('../ApiKey/ApiKey.module').then(m => m.ApiKeyModule),
    data: {
        oPermission: {
            permissionId: 'ApiKey-detail-permissions'
        }
    }
},{
    path: ':user_id/GoogleLogin', loadChildren: () => import('../GoogleLogin/GoogleLogin.module').then(m => m.GoogleLoginModule),
    data: {
        oPermission: {
            permissionId: 'GoogleLogin-detail-permissions'
        }
    }
},{
    path: ':user_id/LoginHistory', loadChildren: () => import('../LoginHistory/LoginHistory.module').then(m => m.LoginHistoryModule),
    data: {
        oPermission: {
            permissionId: 'LoginHistory-detail-permissions'
        }
    }
},{
    path: ':user_id/Notification', loadChildren: () => import('../Notification/Notification.module').then(m => m.NotificationModule),
    data: {
        oPermission: {
            permissionId: 'Notification-detail-permissions'
        }
    }
},{
    path: ':user_id/Otp', loadChildren: () => import('../Otp/Otp.module').then(m => m.OtpModule),
    data: {
        oPermission: {
            permissionId: 'Otp-detail-permissions'
        }
    }
},{
    path: ':user_id/PasswordReset', loadChildren: () => import('../PasswordReset/PasswordReset.module').then(m => m.PasswordResetModule),
    data: {
        oPermission: {
            permissionId: 'PasswordReset-detail-permissions'
        }
    }
},{
    path: ':user_id/UserActivity', loadChildren: () => import('../UserActivity/UserActivity.module').then(m => m.UserActivityModule),
    data: {
        oPermission: {
            permissionId: 'UserActivity-detail-permissions'
        }
    }
},{
    path: ':user_id/UserProfile', loadChildren: () => import('../UserProfile/UserProfile.module').then(m => m.UserProfileModule),
    data: {
        oPermission: {
            permissionId: 'UserProfile-detail-permissions'
        }
    }
},{
    path: ':user_id/UserSetting', loadChildren: () => import('../UserSetting/UserSetting.module').then(m => m.UserSettingModule),
    data: {
        oPermission: {
            permissionId: 'UserSetting-detail-permissions'
        }
    }
},{
    path: ':user_id/UserUserRole', loadChildren: () => import('../UserUserRole/UserUserRole.module').then(m => m.UserUserRoleModule),
    data: {
        oPermission: {
            permissionId: 'UserUserRole-detail-permissions'
        }
    }
}
];

export const USER_MODULE_DECLARATIONS = [
    UserHomeComponent,
    UserNewComponent,
    UserDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
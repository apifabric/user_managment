import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'ApiKey', loadChildren: () => import('./ApiKey/ApiKey.module').then(m => m.ApiKeyModule) },
    
        { path: 'GoogleLogin', loadChildren: () => import('./GoogleLogin/GoogleLogin.module').then(m => m.GoogleLoginModule) },
    
        { path: 'LoginHistory', loadChildren: () => import('./LoginHistory/LoginHistory.module').then(m => m.LoginHistoryModule) },
    
        { path: 'Notification', loadChildren: () => import('./Notification/Notification.module').then(m => m.NotificationModule) },
    
        { path: 'Otp', loadChildren: () => import('./Otp/Otp.module').then(m => m.OtpModule) },
    
        { path: 'PasswordReset', loadChildren: () => import('./PasswordReset/PasswordReset.module').then(m => m.PasswordResetModule) },
    
        { path: 'User', loadChildren: () => import('./User/User.module').then(m => m.UserModule) },
    
        { path: 'UserActivity', loadChildren: () => import('./UserActivity/UserActivity.module').then(m => m.UserActivityModule) },
    
        { path: 'UserProfile', loadChildren: () => import('./UserProfile/UserProfile.module').then(m => m.UserProfileModule) },
    
        { path: 'UserRole', loadChildren: () => import('./UserRole/UserRole.module').then(m => m.UserRoleModule) },
    
        { path: 'UserSetting', loadChildren: () => import('./UserSetting/UserSetting.module').then(m => m.UserSettingModule) },
    
        { path: 'UserUserRole', loadChildren: () => import('./UserUserRole/UserUserRole.module').then(m => m.UserUserRoleModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
import { MenuRootItem } from 'ontimize-web-ngx';

import { ApiKeyCardComponent } from './ApiKey-card/ApiKey-card.component';

import { GoogleLoginCardComponent } from './GoogleLogin-card/GoogleLogin-card.component';

import { LoginHistoryCardComponent } from './LoginHistory-card/LoginHistory-card.component';

import { NotificationCardComponent } from './Notification-card/Notification-card.component';

import { OtpCardComponent } from './Otp-card/Otp-card.component';

import { PasswordResetCardComponent } from './PasswordReset-card/PasswordReset-card.component';

import { UserCardComponent } from './User-card/User-card.component';

import { UserActivityCardComponent } from './UserActivity-card/UserActivity-card.component';

import { UserProfileCardComponent } from './UserProfile-card/UserProfile-card.component';

import { UserRoleCardComponent } from './UserRole-card/UserRole-card.component';

import { UserSettingCardComponent } from './UserSetting-card/UserSetting-card.component';

import { UserUserRoleCardComponent } from './UserUserRole-card/UserUserRole-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'ApiKey', name: 'APIKEY', icon: 'view_list', route: '/main/ApiKey' }
    
        ,{ id: 'GoogleLogin', name: 'GOOGLELOGIN', icon: 'view_list', route: '/main/GoogleLogin' }
    
        ,{ id: 'LoginHistory', name: 'LOGINHISTORY', icon: 'view_list', route: '/main/LoginHistory' }
    
        ,{ id: 'Notification', name: 'NOTIFICATION', icon: 'view_list', route: '/main/Notification' }
    
        ,{ id: 'Otp', name: 'OTP', icon: 'view_list', route: '/main/Otp' }
    
        ,{ id: 'PasswordReset', name: 'PASSWORDRESET', icon: 'view_list', route: '/main/PasswordReset' }
    
        ,{ id: 'User', name: 'USER', icon: 'view_list', route: '/main/User' }
    
        ,{ id: 'UserActivity', name: 'USERACTIVITY', icon: 'view_list', route: '/main/UserActivity' }
    
        ,{ id: 'UserProfile', name: 'USERPROFILE', icon: 'view_list', route: '/main/UserProfile' }
    
        ,{ id: 'UserRole', name: 'USERROLE', icon: 'view_list', route: '/main/UserRole' }
    
        ,{ id: 'UserSetting', name: 'USERSETTING', icon: 'view_list', route: '/main/UserSetting' }
    
        ,{ id: 'UserUserRole', name: 'USERUSERROLE', icon: 'view_list', route: '/main/UserUserRole' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    ApiKeyCardComponent

    ,GoogleLoginCardComponent

    ,LoginHistoryCardComponent

    ,NotificationCardComponent

    ,OtpCardComponent

    ,PasswordResetCardComponent

    ,UserCardComponent

    ,UserActivityCardComponent

    ,UserProfileCardComponent

    ,UserRoleCardComponent

    ,UserSettingCardComponent

    ,UserUserRoleCardComponent

];
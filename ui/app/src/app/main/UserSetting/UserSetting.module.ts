import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {USERSETTING_MODULE_DECLARATIONS, UserSettingRoutingModule} from  './UserSetting-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    UserSettingRoutingModule
  ],
  declarations: USERSETTING_MODULE_DECLARATIONS,
  exports: USERSETTING_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserSettingModule { }
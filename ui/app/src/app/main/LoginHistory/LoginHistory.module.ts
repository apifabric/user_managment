import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {LOGINHISTORY_MODULE_DECLARATIONS, LoginHistoryRoutingModule} from  './LoginHistory-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    LoginHistoryRoutingModule
  ],
  declarations: LOGINHISTORY_MODULE_DECLARATIONS,
  exports: LOGINHISTORY_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginHistoryModule { }
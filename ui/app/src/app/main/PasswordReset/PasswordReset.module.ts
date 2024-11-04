import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PASSWORDRESET_MODULE_DECLARATIONS, PasswordResetRoutingModule} from  './PasswordReset-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    PasswordResetRoutingModule
  ],
  declarations: PASSWORDRESET_MODULE_DECLARATIONS,
  exports: PASSWORDRESET_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PasswordResetModule { }
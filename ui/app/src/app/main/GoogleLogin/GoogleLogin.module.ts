import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {GOOGLELOGIN_MODULE_DECLARATIONS, GoogleLoginRoutingModule} from  './GoogleLogin-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    GoogleLoginRoutingModule
  ],
  declarations: GOOGLELOGIN_MODULE_DECLARATIONS,
  exports: GOOGLELOGIN_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoogleLoginModule { }
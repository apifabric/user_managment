import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {APIKEY_MODULE_DECLARATIONS, ApiKeyRoutingModule} from  './ApiKey-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ApiKeyRoutingModule
  ],
  declarations: APIKEY_MODULE_DECLARATIONS,
  exports: APIKEY_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ApiKeyModule { }
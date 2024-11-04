import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {USERUSERROLE_MODULE_DECLARATIONS, UserUserRoleRoutingModule} from  './UserUserRole-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    UserUserRoleRoutingModule
  ],
  declarations: USERUSERROLE_MODULE_DECLARATIONS,
  exports: USERUSERROLE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserUserRoleModule { }
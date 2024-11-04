import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiKeyHomeComponent } from './home/ApiKey-home.component';
import { ApiKeyNewComponent } from './new/ApiKey-new.component';
import { ApiKeyDetailComponent } from './detail/ApiKey-detail.component';

const routes: Routes = [
  {path: '', component: ApiKeyHomeComponent},
  { path: 'new', component: ApiKeyNewComponent },
  { path: ':id', component: ApiKeyDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ApiKey-detail-permissions'
      }
    }
  }
];

export const APIKEY_MODULE_DECLARATIONS = [
    ApiKeyHomeComponent,
    ApiKeyNewComponent,
    ApiKeyDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApiKeyRoutingModule { }
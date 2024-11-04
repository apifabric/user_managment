import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'UserUserRole-new',
  templateUrl: './UserUserRole-new.component.html',
  styleUrls: ['./UserUserRole-new.component.scss']
})
export class UserUserRoleNewComponent {
  @ViewChild("UserUserRoleForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}
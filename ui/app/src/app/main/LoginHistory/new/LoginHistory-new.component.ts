import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'LoginHistory-new',
  templateUrl: './LoginHistory-new.component.html',
  styleUrls: ['./LoginHistory-new.component.scss']
})
export class LoginHistoryNewComponent {
  @ViewChild("LoginHistoryForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}
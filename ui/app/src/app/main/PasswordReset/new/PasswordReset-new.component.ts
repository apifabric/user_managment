import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'PasswordReset-new',
  templateUrl: './PasswordReset-new.component.html',
  styleUrls: ['./PasswordReset-new.component.scss']
})
export class PasswordResetNewComponent {
  @ViewChild("PasswordResetForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}
import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'GoogleLogin-new',
  templateUrl: './GoogleLogin-new.component.html',
  styleUrls: ['./GoogleLogin-new.component.scss']
})
export class GoogleLoginNewComponent {
  @ViewChild("GoogleLoginForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}
import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ApiKey-new',
  templateUrl: './ApiKey-new.component.html',
  styleUrls: ['./ApiKey-new.component.scss']
})
export class ApiKeyNewComponent {
  @ViewChild("ApiKeyForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}
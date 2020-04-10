import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule, forwardRef, ModuleWithProviders } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { ContainerComponent } from './container/container.component';
import { InputComponent } from './input/input.component';
import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuillModule } from 'ngx-quill'
import {NgbPopoverModule} from '@ng-bootstrap/ng-bootstrap';
import { QRCodeModule } from 'angularx-qrcode';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MbscModule } from '../../../lib/mobiscroll/js/mobiscroll.angular.min';

export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
      'swipe': {velocity: 0.4, threshold: 20} // override default settings
  }
}

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CommonModule,
    RouterModule,
    QuillModule.forRoot(),
    NgbPopoverModule,
    QRCodeModule,
    MbscModule,
  ],
  declarations: [
    ContainerComponent,
    InputComponent
  ],
  exports: [
    ContainerComponent,
    BrowserModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    InputComponent,
    QuillModule,
    NgbPopoverModule,
    QRCodeModule,
    MbscModule,
  ],
  providers: [

  ]
})
export class GenericModule {
  public forRoot(): ModuleWithProviders {
    return {
      ngModule: GenericModule,
      providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          multi: true,
          useExisting: forwardRef(() => InputComponent)
        },
        {
          provide: HAMMER_GESTURE_CONFIG,
          useClass: MyHammerConfig
      }
      ]
    }
  }
}

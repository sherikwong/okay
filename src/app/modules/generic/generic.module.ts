import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule, forwardRef } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { ContainerComponent } from './container/container.component';
import { InputComponent } from './input/input.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
  ],
  declarations: [
    ContainerComponent,
    InputComponent
  ],
  exports: [
    ContainerComponent,
    InputComponent,
    BrowserModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    // FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
  ],
  providers: [

  ]
})
export class GenericModule { }

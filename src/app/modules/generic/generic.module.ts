import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { InputComponent } from './input/input.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [],
  imports: [
    MaterialModule,
    CommonModule,
    ContainerComponent,
    InputComponent
  ],
  exports: [
    ContainerComponent,
    InputComponent
  ]
})
export class GenericModule { }

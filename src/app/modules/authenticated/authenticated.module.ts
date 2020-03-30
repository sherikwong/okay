import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './dashboard/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { TaskComponent } from './tasks/task/task.component';
import { EditTaskComponent } from './tasks/task/edit/edit.component';
import {MatInputModule} from '@angular/material/input';
import { MaterialModule } from '../material/material.module';
import { GenericModule } from '../generic/generic.module';


@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    GenericModule,
  ],
  declarations: [
    HomeComponent,
    InventoryComponent,
    TaskComponent,
    EditTaskComponent,
  ],
  exports: [
    HomeComponent,
    InventoryComponent,
    TaskComponent,
    EditTaskComponent,
  ]
})
export class AuthenticatedModule { }

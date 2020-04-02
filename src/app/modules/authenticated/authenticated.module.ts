import { NgModule } from '@angular/core';
import { GenericModule } from '../generic/generic.module';
import { HomeComponent } from './dashboard/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { TasksListComponent } from './tasks/list/list.component';
import { TaskComponent } from './tasks/task/task.component';
import { EditTaskComponent } from './tasks/edit-task/edit-task.component';


@NgModule({
  imports: [
    GenericModule,
  ],
  declarations: [
    HomeComponent,
    InventoryComponent,
    TaskComponent,
    EditTaskComponent,
    TasksListComponent,
    EditTaskComponent,

  ],
  exports: [
    HomeComponent,
    InventoryComponent,
    TaskComponent,
    EditTaskComponent,
    TasksListComponent
  ]
})
export class AuthenticatedModule { }

import { NgModule } from '@angular/core';
import { GenericModule } from '../generic/generic.module';
import { HomeComponent } from './dashboard/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { TasksListComponent } from './tasks/list/list.component';
import { TaskComponent } from './tasks/task/task.component';
import { EditTaskComponent } from './tasks/edit-task/edit-task.component';
import { AssigneeComponent } from './tasks/assignee/assignee.component';
import { QueueComponent } from './tasks/task/queue/queue.component';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { QueuedComponent } from './tasks/task/queue/queued/queued.component';


@NgModule({
  imports: [
    GenericModule
  ],
  declarations: [
    HomeComponent,
    InventoryComponent,
    TaskComponent,
    EditTaskComponent,
    TasksListComponent,
    AssigneeComponent,
    QueueComponent,
    QueuedComponent,

  ],
  exports: [
    HomeComponent,
    InventoryComponent,
    TaskComponent,
    EditTaskComponent,
    TasksListComponent,
    AssigneeComponent,
    QueueComponent
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ]
})
export class AuthenticatedModule { }

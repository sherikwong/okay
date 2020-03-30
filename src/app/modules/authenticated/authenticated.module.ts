import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './dashboard/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { TaskComponent } from './tasks/task/task.component';
// import { AuthenticatedRoutingModule } from './authenticated.routes';
import { EditTaskComponent } from './tasks/task/edit/edit.component';



@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    // AuthenticatedRoutingModule
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

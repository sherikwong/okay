import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from '../account/dashboard/home.component';
import { InventoryComponent } from '../account/inventory/inventory.component';
import { TaskComponent } from '../account/tasks/task/task.component';
import { EditComponent } from '../account/tasks/task/edit/edit.component';
// import { AuthenticatedRoutingModule } from './authenticated.routes';



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
    EditComponent,
  ],
  exports: [
    HomeComponent,
    InventoryComponent,
    TaskComponent,
    EditComponent,
    // AuthenticatedRoutingModule
  ]
})
export class AuthenticatedModule { }

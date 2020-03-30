

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedRoutes } from '../../enums/routes.enum';
import { HomeComponent } from '../account/dashboard/home.component';
import { InventoryComponent } from '../account/inventory/inventory.component';
import { TasksListComponent } from '../account/tasks/list/list.component';
import { AuthenticatedGuard } from '../../guard/authenticated.guard';

export const authenticatedRoutes: Routes = [
      {
        path: AuthenticatedRoutes.Home,
        component: HomeComponent,
        data: {
          title: 'Home',
          icon: 'home'
        }
      },
      {
        path: AuthenticatedRoutes.Tasks,
        component: TasksListComponent,
        data: {
          title: 'Tasks',
          icon: 'check'
        }
      },
      {
        path: AuthenticatedRoutes.Inventory,
        component: InventoryComponent,
        data: {
          title: 'Inventory',
          icon: 'fastfood'
        }
      },
      {
        path: '**',
        redirectTo: AuthenticatedRoutes.Home
      }
    // canActivate: [AuthenticatedGuard]
];
// @NgModule({
//   imports: [RouterModule.forChild(authenticatedRoutes)],
//   exports: [RouterModule]
// })
// export class AuthenticatedRoutingModule { }


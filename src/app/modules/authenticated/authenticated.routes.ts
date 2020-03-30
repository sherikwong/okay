

import { Routes } from '@angular/router';
import { AuthenticatedRoutes } from '../../enums/routes.enum';
import { TasksListComponent } from './tasks/list/list.component';
import { InventoryComponent } from './inventory/inventory.component';

export const authenticatedRoutes: Routes = [
      {
        path: AuthenticatedRoutes.Home,
        // component: HomeComponent,
        component: TasksListComponent,
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




import { Routes } from '@angular/router';
import { AuthenticatedRoutes } from '../../enums/routes.enum';
import { TasksListComponent } from './tasks/list/list.component';
import { InventoryComponent } from './inventory/inventory.component';
import { TaskComponent } from './tasks/task/task.component';
import { EditItemComponent } from './inventory/item/edit-item/edit-item.component';
import { QueueComponent } from './tasks/task/queue/queue.component';

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
    data: {
      title: 'Tasks',
      icon: 'check'
    },
    children: [
      {
        path: '',
        component: TasksListComponent,
      },
      {
        path: ':id',
        component: TaskComponent,
        children: [
          {
            path: 'details',
            component: EditItemComponent,
            // outlet: 'task',
          },
          {
            path: 'assigned',
            component: QueueComponent,
            // outlet: 'task'
          },
          {
            path: 'comments',
            component: EditItemComponent,
            // outlet: 'task'
          },
          { path: '**', redirectTo: 'details' }
        ]
      },
      { path: '**', redirectTo: '' }
    ]
  },
  {
    path: AuthenticatedRoutes.Inventory,
    component: InventoryComponent,
    data: {
      title: 'Inventory',
      icon: 'add'
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
    path: AuthenticatedRoutes.Account,
    component: InventoryComponent,
    data: {
      title: 'Account',
      icon: 'person'
    }
  },
  {
    path: '**',
    redirectTo: AuthenticatedRoutes.Home
  }
  // canActivate: [AuthenticatedGuard]
];

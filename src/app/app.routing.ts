import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/custom/home/home.component';
import { InventoryComponent } from './components/custom/inventory/inventory.component';
import { TasksListComponent } from './components/custom/tasks/list/list.component';
import { cloneDeep } from 'lodash';
import { overlayRoutes } from './components/custom/overlay/overlay.routing';

export enum AppRoutes {
  Home = '',
  Tasks = 'tasks',
  Inventory = 'inventory'
}

export const routes: Routes = [
  {
    path: AppRoutes.Home,
    component: HomeComponent,
    data: {
      title: 'Home',
      icon: 'home'
    }
  },
  {
    path: AppRoutes.Tasks,
    component: TasksListComponent,
    data: {
      title: 'Tasks',
      icon: 'check'
    }
  },
  {
    path: AppRoutes.Inventory,
    component: InventoryComponent,
    data: {
      title: 'Inventory',
      icon: 'fastfood'
    }
  }, {
    path: '**',
    redirectTo: AppRoutes.Home
  }

];

@NgModule({
  imports: [RouterModule.forRoot(cloneDeep(routes))],
  exports: [RouterModule]
})
export class AppRoutingModule { }

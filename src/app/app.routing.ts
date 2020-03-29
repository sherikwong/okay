import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { cloneDeep } from 'lodash';
import { HomeComponent } from './components/custom/home/home.component';
import { InventoryComponent } from './components/custom/inventory/inventory.component';
import { TasksListComponent } from './components/custom/tasks/list/list.component';
import { AppRoutes } from './enums/routes.enum';
import { AccountModule } from './modules/account/account.module';

export const appRoutes: Routes = [
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
  },
  {
    path: AppRoutes.Account,
    loadChildren: './modules/account/account.module#AccountModule',
    data: {
      title: 'Account',
      icon: 'person'
    }
  },
  {
    path: '**',
    redirectTo: AppRoutes.Home
  }

];

@NgModule({
  imports: [RouterModule.forRoot(cloneDeep(appRoutes))],
  exports: [RouterModule]
})
export class AppRoutingModule { }

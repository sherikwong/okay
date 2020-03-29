import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/custom/home/home.component';
import { InventoryComponent } from './components/custom/inventory/inventory.component';
import { TasksListComponent } from './components/custom/tasks/list/list.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Home',
      icon: 'home'
    }
  },
  {
    path: 'tasks',
    component: TasksListComponent,
    data: {
      title: 'Tasks',
      icon: 'check'
    }
  },
  {
    path: 'inventory',
    component: InventoryComponent,
    data: {
      title: 'Inventory',
      icon: 'fastfood'
    }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

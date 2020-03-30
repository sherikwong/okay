import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedRoutes } from './enums/routes.enum';
import { AccountModule } from './modules/account/account.module';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './modules/authenticated/authenticated.module#AuthenticatedModule'
  },
  {
    path: 'account',
    loadChildren: './modules/account/account.module#AccountModule'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

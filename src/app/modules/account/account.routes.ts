import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { AccountGuard } from "../../guard/account.guard";
import { AccountComponent } from './components/account/account.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const accountRoutes: Routes = [
  {
    path: 'account',
    component: AccountComponent,
    children: [
      {
        path: '**',
        redirectTo: ''
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AccountGuard]
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(accountRoutes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }

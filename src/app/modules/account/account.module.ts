import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import { NgModule } from "@angular/core";
import { LoginComponent } from './components/login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";
import { RouterModule, CanActivate, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import {Google} from '../../../../secret';
import { AccountGuard } from "../../guard/account.guard";

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(Google.id)
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("Facebook-App-Id")
  }
]);

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

// accountRoutes.forEach((route, i) => accountRoutes[i].canActivate = [AccountGuard])

@NgModule({
  imports: [
    [RouterModule.forChild(accountRoutes)],
    MatIconModule,
    MatButtonModule
  ],
  declarations: [
    LoginComponent,
    AccountComponent,
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useValue: config
    }
  ],
  bootstrap: [
    AccountComponent
  ],
  exports: [
    LoginComponent,
    AccountComponent
  ]
})

export class AccountModule {}

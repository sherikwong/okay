import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';
import { AuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';
import { AccountRoutingModule } from "./account.routes";

import {Google} from '../../../../secret';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(Google.id)
  }
]);

@NgModule({
  imports: [
    AccountRoutingModule,
    MatIconModule,
    MatButtonModule,
    CommonModule
  ],
  declarations: [
    LoginComponent,
    AccountComponent
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

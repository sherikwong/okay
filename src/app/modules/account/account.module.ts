import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';
import { AuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';
import { AccountRoutingModule } from "./account.routes";
import { AccountComponent } from './components/account/account.component';
import { LoginComponent } from './components/login/login.component';
import {Google} from '../../../../secret';

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

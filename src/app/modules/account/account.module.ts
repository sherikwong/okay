import { NgModule } from "@angular/core";
import { AuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';
import { Google } from '../../../secret';
import { GenericModule } from './../generic/generic.module';
import { AccountRoutingModule } from "./account.routes";
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';


let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(Google.id)
  }
]);

@NgModule({
  imports: [
    GenericModule,
    AccountRoutingModule,
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

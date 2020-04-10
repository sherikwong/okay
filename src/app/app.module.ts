import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InjectionToken, NgModule } from '@angular/core';
import { SocialLoginModule } from "angularx-social-login";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HamburgerComponent } from './components/hamburger/hamburger.component';
import { HeaderComponent } from './components/header/header.component';
import { AccountModule } from './modules/account/account.module';
import { AuthenticatedModule } from './modules/authenticated/authenticated.module';
import { GenericModule } from './modules/generic/generic.module';
import { MaterialModule } from './modules/material/material.module';
import { OverlayModule } from './modules/overlay/overlay.module';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { ItemService } from './services/item.service';
import { NamePipe } from './pipes/name.pipe';


export const OverlayToken = new InjectionToken('overlayService');

const ThirdPartyModules = [
  SocialLoginModule
];

const OkayModules = [
  AuthenticatedModule,
  AppRoutingModule,
  OverlayModule.forRoot(),
  AccountModule,
];

@NgModule({
  imports: [
    GenericModule,
    ...ThirdPartyModules,
    MaterialModule,
    ...OkayModules,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    HamburgerComponent,
    NamePipe,
  ],
  providers: [
    ItemService,
    // TasksService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

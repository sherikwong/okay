import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InjectionToken, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialLoginModule } from "angularx-social-login";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HamburgerComponent } from './components/hamburger/hamburger.component';
import { HeaderComponent } from './components/header/header.component';
import { InputComponent } from './components/input/input.component';
import { AccountModule } from './modules/account/account.module';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { ItemService } from './services/item.service';
import { TasksService } from './services/tasks.service';
import { ContainerComponent } from './components/container/container.component';
import { OverlayModule } from './modules/overlay/overlay.module';

export const OverlayToken = new InjectionToken('overlayService');

const AngularModules = [
  BrowserModule,
  HttpClientModule,
  CommonModule,
  BrowserAnimationsModule,
  FormsModule,
  ReactiveFormsModule,
]

const MaterialModules = [
  DragDropModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatDividerModule,
  MatListModule,
  MatCardModule,
  MatTableModule
];

const ThirdPartyModules = [
  SocialLoginModule,
];

const OkayModules = [
  AppRoutingModule,
  OverlayModule.forRoot(),
  AccountModule,
];

@NgModule({
  imports: [
  ...AngularModules,
  ...MaterialModules,
  ...ThirdPartyModules,
  ...OkayModules
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    HamburgerComponent,
    InputComponent,
    ContainerComponent,
  ],
  providers: [
    ItemService,
    TasksService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

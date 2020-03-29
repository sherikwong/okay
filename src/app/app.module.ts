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
import { HamburgerComponent } from './components/custom/hamburger/hamburger.component';
import { HeaderComponent } from './components/custom/header/header.component';
import { HomeComponent } from './components/custom/home/home.component';
import { InventoryComponent } from './components/custom/inventory/inventory.component';
import { OverlayModule } from './components/custom/overlay/overlay.module';
import { EditComponent } from './components/custom/tasks/task/edit/edit.component';
import { TaskComponent } from './components/custom/tasks/task/task.component';
import { InputComponent } from './components/generic/input/input.component';
import { AccountModule } from './modules/account/account.module';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { ItemService } from './services/item.service';
import { TasksService } from './services/tasks.service';
import { ContainerComponent } from './components/generic/container/container.component';

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

const OkayModules = [
  OverlayModule.forRoot(),
  AccountModule,
  SocialLoginModule,
  AppRoutingModule,
];

@NgModule({
  imports: [
  ...AngularModules,
  ...MaterialModules,
  ...OkayModules
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    InventoryComponent,
    HomeComponent,
    HeaderComponent,
    HamburgerComponent,
    TaskComponent,
    EditComponent,
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

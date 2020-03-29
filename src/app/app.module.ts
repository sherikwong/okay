import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, InjectionToken } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '../../node_modules/@angular/material/divider';
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
import { HttpInterceptorService } from './services/http-interceptor.service';
import { ItemService } from './services/item.service';
import { OverlayService } from './services/overlay.service';
import { TasksService } from './services/tasks.service';

export const OverlayToken = new InjectionToken('overlayService');


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatTableModule,
    CommonModule,
    DragDropModule,
    MatListModule,
    MatCardModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    OverlayModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    // UpdateComponent,
    // CalendarComponent,
    // ItemComponent,
    // EditItemComponent,
    InventoryComponent,
    // TasksListComponent,
    HomeComponent,
    HeaderComponent,
    HamburgerComponent,
    TaskComponent,
    EditComponent,
    InputComponent
  ],
  providers: [
    ItemService,
    TasksService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
    OverlayService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

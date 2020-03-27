import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ItemService } from './services/item.service';
import { TasksService } from './services/tasks.service';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/custom/header/header.component';
import { InventoryComponent } from './components/custom/inventory/inventory.component';
import { HomeComponent } from './components/custom/home/home.component';

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
  ],
  declarations: [
    AppComponent,
    // DashboardComponent,
    // UpdateComponent,
    // CalendarComponent,
    // ItemComponent,
    // EditItemComponent,
    InventoryComponent,
    // TasksListComponent,
    HomeComponent,
    HeaderComponent
  ],
  providers: [
    ItemService,
    TasksService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

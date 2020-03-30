import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OverlayComponent } from "./overlay.component";
import { overlayRoutes, OverlayRoutingModule } from './overlay.routing';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../components/menu/menu.component';
import { OverlayService } from '../../services/overlay.service';
import { ProxyRouteComponent } from './proxy-route.component';

@NgModule({
  imports: [
    OverlayRoutingModule,
    MatListModule,
    MatIconModule,
    CommonModule
  ],
  exports: [
    RouterModule,
    OverlayComponent,

  ],
  bootstrap: [OverlayComponent],
  declarations: [
    OverlayComponent,
    MenuComponent,
    ProxyRouteComponent
  ]
})
export class OverlayModule{
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: OverlayModule,
      providers: [
        OverlayService,
      ]
    }
  }
}

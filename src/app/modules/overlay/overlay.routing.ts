import { map } from 'rxjs/operators';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from '../../components/menu/menu.component';
import { OverlayRoutes } from '../../enums/routes.enum';
import { NgModule } from '@angular/core';
import { ProxyRouteComponent } from './proxy-route.component';

export const overlayRoutes: Routes = [
  {
    path: '',
    outlet: 'overlay',
    component: ProxyRouteComponent,
    children: [
      {
        path: OverlayRoutes.Menu,
        component: MenuComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(overlayRoutes)],
  exports: [RouterModule]
})

export class OverlayRoutingModule {}

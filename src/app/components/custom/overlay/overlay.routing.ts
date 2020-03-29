import { MenuComponent } from '../../menu/menu.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { OverlayComponent } from './overlay.component';
import { BackgroundColor } from '../../../services/overlay.service';

export enum OverlayRoutes {
  Menu = 'menu'
}

export const overlayRoutes: Routes = [
  {
    path: OverlayRoutes.Menu,
    component: MenuComponent,
    data: {
      color: BackgroundColor.Accent
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(overlayRoutes)],
  exports: [RouterModule]
})
export class OverlayRoutingModule { }

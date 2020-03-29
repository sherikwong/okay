import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from '../../menu/menu.component';

export enum OverlayRoutes {
  Menu = 'menu'
}

export const overlayRoutes: Routes = [
  {
    path: OverlayRoutes.Menu,
    component: MenuComponent
  }
].map(route => ({
  ...route,
  ...{outlet: 'overlay'}
}));

@NgModule({
  imports: [RouterModule.forRoot(overlayRoutes)],
  exports: [RouterModule]
})
export class OverlayRoutingModule { }

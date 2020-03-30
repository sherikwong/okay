import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from '../../components/menu/menu.component';
import { OverlayRoutes } from '../../enums/routes.enum';
import { NgModule } from '@angular/core';

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
  imports: [RouterModule.forChild(overlayRoutes)],
  exports: [RouterModule]
})

export class OverlayRoutingModule {}

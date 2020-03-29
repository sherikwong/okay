import { Routes } from '@angular/router';
import { MenuComponent } from '../../menu/menu.component';
import { OverlayRoutes } from '../../../enums/routes.enum';

export const overlayRoutes: Routes = [
  {
    path: OverlayRoutes.Menu,
    component: MenuComponent
  }
].map(route => ({
  ...route,
  ...{outlet: 'overlay'}
}));

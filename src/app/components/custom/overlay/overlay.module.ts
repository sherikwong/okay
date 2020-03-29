import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OverlayService } from '../../../services/overlay.service';
import { MenuComponent } from '../../menu/menu.component';
import { OverlayComponent } from "./overlay.component";
import { overlayRoutes } from './overlay.routing';

@NgModule({
  imports: [
    [RouterModule.forRoot(overlayRoutes)]
  ],
  exports: [
    RouterModule,
    OverlayComponent,

  ],
  bootstrap: [OverlayComponent],
  declarations: [
    OverlayComponent,
    MenuComponent,
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

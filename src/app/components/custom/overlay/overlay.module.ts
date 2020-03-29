import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OverlayService } from '../../../services/overlay.service';
import { MenuComponent } from '../../menu/menu.component';
import { OverlayComponent } from "./overlay.component";
import { overlayRoutes } from './overlay.routing';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    [RouterModule.forRoot(overlayRoutes)],
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

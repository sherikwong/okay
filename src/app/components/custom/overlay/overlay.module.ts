import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OverlayService } from "../../../services/overlay.service";
import { OverlayComponent } from "./overlay.component";
import { OverlayRoutingModule } from './overlay.routing';

@NgModule({
  imports: [
    OverlayRoutingModule
  ],
  exports: [
    RouterModule,
    OverlayComponent
  ],
  bootstrap: [OverlayComponent],
  declarations: [
    OverlayComponent
  ]
})
export class OverlayModule{
  public forRoot() {
    return {
      ngModule: OverlayModule,
      providers: [
        OverlayService
      ]
    }
  }
}

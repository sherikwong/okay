import { OverlayComponent } from "./overlay.component";
import { OverlayRoutingModule } from "./overlay.routing";
import { NgModule } from '@angular/core';
import { OverlayService } from "../../../services/overlay.service";

@NgModule({
  imports: [
    OverlayRoutingModule
  ],
  exports: [
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

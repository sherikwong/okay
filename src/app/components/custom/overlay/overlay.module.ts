import { OverlayComponent } from "./overlay.component";
import { OverlayRoutingModule } from "./overlay.routing";
import { NgModule } from '@angular/core';

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
export class OverlayModule{}

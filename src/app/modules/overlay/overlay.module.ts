import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from '../../components/menu/menu.component';
import { OverlayService } from '../../services/overlay.service';
import { GenericModule } from '../generic/generic.module';
import { OverlayComponent } from './overlay.component';

@NgModule({
  imports: [
  GenericModule
  ],
  exports: [
    OverlayComponent,
    MenuComponent,
  ],
  bootstrap: [OverlayComponent],
  declarations: [
    OverlayComponent,
    MenuComponent,
  ]
})
export class OverlayModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: OverlayModule,
      providers: [
        OverlayService,
      ]
    };
  }
}

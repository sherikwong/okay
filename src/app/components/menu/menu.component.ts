import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutes, routes } from '../../app.routing';
import { OverlayService } from '../../services/overlay.service';

@Component({
  selector: 'okay-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  // public routes = routes;

  constructor(
    private router: Router,
    // private overlayService: OverlayService
  ) { }

  ngOnInit(): void {
    console.log('Router', this.router);
  }

  public navigate(route: AppRoutes) {
    // this.overlayService.close();
    // this.router.navigate([
    //   route,
    //   // {
    //   //   outlets: {
    //   //     overlay: OverlayRoutes.Menu
    //   //   }
    //   // }
    // ]);
  }
}

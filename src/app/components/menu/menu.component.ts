import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { appRoutes } from '../../app.routing';
import { OverlayService } from '../../services/overlay.service';
import { AppRoutes, OverlayRoutes } from '../../enums/routes.enum';

@Component({
  selector: 'okay-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public routes = appRoutes;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private overlayService: OverlayService
  ) {
  }

  ngOnInit(): void {
    console.log('Router', this.routes, this.router);
  }

  public navigate(route: AppRoutes) {
    this.overlayService.close();
    this.router.navigateByUrl(route);
    // , {
    //   relativeTo: this.activeRoute.parent
    // });
  }
}

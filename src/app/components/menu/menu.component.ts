import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { appRoutes } from '../../app.routing';
import { AppRoutes } from '../../enums/routes.enum';
import { OverlayService } from '../../services/overlay.service';

@Component({
  selector: 'okay-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public routes = appRoutes;

  constructor(
    private router: Router,
    private overlayService: OverlayService
  ) {
  }

  ngOnInit(): void {
    console.log('Router', this.routes, this.router);
  }

  public navigate(route: AppRoutes) {
    this.overlayService.close();
    this.router.navigateByUrl(route);
  }
}

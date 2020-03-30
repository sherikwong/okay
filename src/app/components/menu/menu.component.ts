import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatedRoutes } from '../../enums/routes.enum';
import { OverlayService } from '../../services/overlay.service';
import { authenticatedRoutes } from '../../modules/authenticated/authenticated.routes';

@Component({
  selector: 'okay-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public routes = authenticatedRoutes;

  constructor(
    private router: Router,
    private overlayService: OverlayService
  ) {
  }

  ngOnInit(): void {
  }

  public navigate(route: AuthenticatedRoutes) {
    this.router.navigateByUrl(route);
    this.overlayService.close();
  }
}

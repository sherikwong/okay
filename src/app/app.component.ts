import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OverlayService } from './services/overlay.service';
import { AccountService } from './services/account.service';
import { AuthenticatedRoutes } from './enums/routes.enum';
import { authenticatedRoutes } from './modules/authenticated/authenticated.routes';


@Component({
  selector: 'okay-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public routes = authenticatedRoutes;


  constructor(
    private router: Router,
    private overlayService: OverlayService,
    public accountService: AccountService
  ) {
  }

  ngOnInit(): void {
    this.accountService.loadUsers();
    // this.accountService.login();
  }

  public navigate(route: AuthenticatedRoutes) {
    this.router.navigateByUrl(route);
    this.overlayService.close();
  }
}

import { AccountService } from '../../services/account.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OverlayService } from '../../services/overlay.service';
import { OverlayRoutes } from '../../enums/routes.enum';

@Component({
  selector: 'okay-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements OnInit {
  constructor(
    private overlayService: OverlayService,
    private router: Router,
    public accountService: AccountService
  ){}

  public ngOnInit(): void {
  }

  public toggle(): void {
    this.overlayService.opened
    ? this.overlayService.close()
    : this.overlayService.open(OverlayRoutes.Menu);
  }

  public get hide(): boolean {
    return !!this.accountService.user;
  }
}

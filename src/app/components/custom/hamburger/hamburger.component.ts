import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OverlayService } from '../../../services/overlay.service';
import { OverlayRoutes } from '../overlay/overlay.routing';

@Component({
  selector: 'okay-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css']
})
export class HamburgerComponent implements OnInit {
  constructor(
    private overlayService: OverlayService,
    private router: Router
  ){}

  public ngOnInit(): void {
  }

  public toggle(): void {
    console.log(this.overlayService.opened);
    this.overlayService.opened
    ? this.overlayService.close()
    : this.overlayService.open(OverlayRoutes.Menu);
  }
}

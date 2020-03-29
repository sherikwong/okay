import { Component, OnInit } from '@angular/core';
import { OverlayService } from '../../../services/overlay.service';
import { OverlayRoutes } from '../overlay/overlay.routing';

@Component({
  selector: 'okay-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css']
})
export class HamburgerComponent implements OnInit {
  menuRoute = OverlayRoutes.Menu;

  constructor(
    public overlayService: OverlayService
  ){}

  ngOnInit(): void {
  }

}

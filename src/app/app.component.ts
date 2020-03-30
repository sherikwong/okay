import { Component, OnInit } from '@angular/core';
import { OverlayService } from './services/overlay.service';
import { AccountService } from './services/account.service';

@Component({
  selector: 'okay-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public overlayService: OverlayService,
    public accountService: AccountService
  ){
  }
}

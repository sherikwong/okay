import { Component, OnInit } from '@angular/core';
import { OverlayService } from '../../services/overlay.service';

@Component({
  selector: 'okay-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {
  public expandBackground: string;

  constructor(
    public overlayService: OverlayService
  ) { }

  ngOnInit(): void {

  }


  public get backgroundClass(): string {
    if (this.overlayService) {
      setTimeout(function() {
        this.expandBackground = this.overlayService.opened
        ? 'okay-overlay__background--open'
        : '';
      }, 2000)

      return this.overlayService.opened
      ? `okay-overlay__background--${this.overlayService.opened}`
      : '';
    }
    return '';
  }
}

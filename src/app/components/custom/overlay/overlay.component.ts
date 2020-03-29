import { Component, OnInit } from '@angular/core';
import { OverlayService, BackgroundColor } from '../../../services/overlay.service';

@Component({
  selector: 'okay-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {
  public backgroundColor?: BackgroundColor;

  constructor(
    private overlayService: OverlayService
  ) { }

  ngOnInit(): void {

  }

}

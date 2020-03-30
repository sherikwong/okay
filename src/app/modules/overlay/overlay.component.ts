import { Component, OnInit } from '@angular/core';
import { OverlayService } from '../../services/overlay.service';

@Component({
  selector: 'okay-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {
  constructor(
    public overlayService: OverlayService
  ) { }

  ngOnInit(): void {

  }
}

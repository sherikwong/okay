import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'okay-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
    @HostBinding('class.d-flex') flex = true;
    @HostBinding('class.flex-column') column = true;
    @HostBinding('class.h-100') h100 = true;
    @HostBinding('class.w-100') w100 = true;

  constructor() { }

  ngOnInit(): void {
  }

}

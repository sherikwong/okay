import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'okay-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
    @Input('class.d-flex') flex = true;
    @Input('class.flex-column') column = true;
    @Input('h-100') h100 = true;
    @Input('w-100') w100 = true;

  constructor() { }

  ngOnInit(): void {
  }

}

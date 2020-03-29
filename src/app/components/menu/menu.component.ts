import { Component, OnInit } from '@angular/core';
import { routes } from '../../app-routing.module';

@Component({
  selector: 'okay-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public routes = routes;

  constructor() { }

  ngOnInit(): void {
  }

}

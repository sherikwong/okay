import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'okay-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host: {'class': 'okay-container--fill'}
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

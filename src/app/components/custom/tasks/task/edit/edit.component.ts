import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'okay-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public inputs = {
    name: 'Name',
    priority: 'Priority',
    dueDate: 'Due Date',
    room: 'Located in',
    description: 'Description'
  };

  constructor() { }

  ngOnInit(): void {
  }

}

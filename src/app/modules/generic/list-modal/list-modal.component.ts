import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'okay-list-modal',
  templateUrl: './list-modal.component.html',
  styleUrls: ['./list-modal.component.css']
})
export class ListModalComponent<T> implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: T
  ) { }

  ngOnInit(): void {
  }

}


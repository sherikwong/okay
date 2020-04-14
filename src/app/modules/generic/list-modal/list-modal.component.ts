import { Component, OnInit, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { DataService } from '../../../services/data.service';
import { IInput } from '../input/input.component';
import { KeyValue } from '@angular/common';

interface ModalResponse {

}

@Component({
  selector: 'okay-list-modal',
  templateUrl: './list-modal.component.html',
  styleUrls: ['./list-modal.component.scss']
})
export class ListModalComponent implements OnInit {
  options: {[key: string]: string} = {};
  succeeds: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: IInput,
    public dataService: DataService,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    console.log(this.data.options);
    // this.mapValues();
    this.options = this.data.options;
    this.dataService.succeeds.subscribe(succeeds => {
      this.succeeds = succeeds;

      if (succeeds) {
        this.matDialog.closeAll();
      }
    });
  }

  emit(option: string): void {
    const response = {...this.data, value: option};
    console.log('Response inside modal', response);
    this.dataService.emit(response);
  }

  // private mapValues(): void {
  //   const rawOptions = Object.values(this.data.options);
  //   const names = rawOptions.slice(0, rawOptions.length / 2);

  //   names.forEach((name: string, i) => this.options[i] = name);
  // }
}


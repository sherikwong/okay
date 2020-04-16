import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { DataService } from '../../../services/data.service';
import { IInput } from '../input/input.component';

export interface ModalData {
  [key: string]: IInput;
}

@Component({
  selector: 'okay-list-modal',
  templateUrl: './list-modal.component.html',
  styleUrls: ['./list-modal.component.scss']
})
export class ListModalComponent implements OnInit, OnDestroy {
  succeeds: boolean;
  successSubscription: Subscription;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: IInput,
    public dataService: DataService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    console.log(this.options);
    this.successSubscription = this.dataService.succeeds.subscribe(succeeds => {
      if (!succeeds) {
        this.snackbar.open('God fucking damn it. Tell Sheri there\'s a problem saving');
      }
    });
  }

  ngOnDestroy(): void {
    this.successSubscription.unsubscribe();
  }

  get options() {
    return this.data.options;
  }

  emit(option: string): void {
    const response = {
      ...this.data,
      value: option
    };
    this.dataService.emit(response);
  }

  isNotNumber(option: any): boolean {
    return isNaN(option);
  }
}


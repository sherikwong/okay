import { Component, Inject, OnDestroy, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { DataService } from '../../../services/data.service';
import { IInput, InputType } from '../input/input.component';
import { FormControl } from '@angular/forms';
import { MatCalendar } from '@angular/material/datepicker';

export interface ModalData {
  [key: string]: IInput;
}

@Component({
  selector: 'okay-list-modal',
  templateUrl: './list-modal.component.html',
  styleUrls: ['./list-modal.component.scss']
})
export class ListModalComponent implements OnInit, OnDestroy, AfterViewInit {
  succeeds: boolean;
  @ViewChild('calendar', { static: false }) public calendar: MatCalendar<Date>;
  private subscriptions: Subscription[] = [];
  public inputTypes = InputType;
  private currentFieldIndex: number = 0;
  private _fields;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: IInput | IInput[],
    public dataService: DataService,
    private snackbar: MatSnackBar,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this._fields = Array.isArray(this.data)
      ? this.data
      : [this.data];

    const successSubscription = this.dataService.succeeds.subscribe(succeeds => {
      if (succeeds) {
        if (this.currentFieldIndex >= this._fields.length) {
          this.matDialog.closeAll();
        } else {
          this.currentFieldIndex++;
        }
      } else {
        this.snackbar.open('God fucking damn it. Tell Sheri there\'s a problem saving');
      }
    });

    this.subscriptions.push(successSubscription);
  }

  ngAfterViewInit(): void {
    if (this.calendar && this.is[InputType.Date]) {
      const calendarSubsription = this.calendar.selectedChange
        .subscribe(val => this.emit(val));

      this.subscriptions.push(calendarSubsription);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  get currentField(): IInput {
    return this._fields[this.currentFieldIndex];
  }

  emit(newValue: any): void {
    const response = {
      ...this.currentField,
      value: newValue
    };
    this.dataService.emit(response);
  }

  isNotNumber(option: any): boolean {
    return isNaN(option);
  }

  get isDropdown(): boolean {
    return this.currentField.type === InputType.Dropdown;
  }

  get isDatepicker(): boolean {
    return this.currentField.type === InputType.Date;
  }

  datePicked(event): void {
    console.log(event);
  }

  get is(): { [key: string]: boolean } {
    return {
      [String(InputType.Date)]: this.currentField.type === InputType.Date,
      [String(InputType.Dropdown)]: this.currentField.type === InputType.Dropdown,
      [String(InputType.Number)]: this.currentField.type === InputType.Number,
      [String(InputType.Range)]: this.currentField.type === InputType.Range,
      [String(InputType.String)]: this.currentField.type === InputType.String,
      [String(InputType.Textarea)]: this.currentField.type === InputType.Textarea,
    };
  }
}


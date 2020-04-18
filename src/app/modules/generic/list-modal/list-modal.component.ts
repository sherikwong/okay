import { Component, Inject, OnDestroy, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: IInput,
    public dataService: DataService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    const successSubscription = this.dataService.succeeds.subscribe(succeeds => {
      if (!succeeds) {
        this.snackbar.open('God fucking damn it. Tell Sheri there\'s a problem saving');
      }
    });

    this.subscriptions.push(successSubscription);
  }

  ngAfterViewInit(): void {
    const calendarSubsription = this.calendar.selectedChange
      .subscribe(val => this.emit(val));

    this.subscriptions.push(calendarSubsription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  get options() {
    return this.data.options;
  }

  emit(newValue: any): void {
    const response = {
      ...this.data,
      value: newValue
    };
    this.dataService.emit(response);
  }

  isNotNumber(option: any): boolean {
    return isNaN(option);
  }

  get isDropdown(): boolean {
    return this.data.type === InputType.Dropdown;
  }

  get isDatepicker(): boolean {
    return this.data.type === InputType.Date;
  }

  datePicked(event): void {
    console.log(event);
  }
}


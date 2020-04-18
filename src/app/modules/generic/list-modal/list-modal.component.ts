import { Component, Inject, OnDestroy, OnInit, ViewChild, AfterViewInit, TemplateRef, Input, DoCheck } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { DataService } from '../../../services/data.service';
import { IInput, InputType } from '../input/input.component';
import { FormControl } from '@angular/forms';
import { MatCalendar } from '@angular/material/datepicker';
import { MatStepper } from '../../../../../node_modules/@angular/material/stepper';

const SUCCESS_SUBSCRIPTION = 'succes';
const CALENDAR_SUBSCRIPTION = 'calendar';

export interface ModalData {
  [key: string]: IInput;
}

@Component({
  selector: 'okay-list-modal',
  templateUrl: './list-modal.component.html',
  styleUrls: ['./list-modal.component.scss']
})
export class ListModalComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('calendar', { static: false }) public calendar: MatCalendar<Date>;
  @ViewChild('stepper', { static: false }) stepper: MatStepper;

  @ViewChild('dropdown', { static: false }) dropdown: TemplateRef<any>;
  @ViewChild('datepicker', { static: false }) datepicker: TemplateRef<any>;
  @ViewChild('textarea', { static: false }) textarea: TemplateRef<any>;

  private templateEquiv = new Map([
    [InputType.Dropdown, 'dropdown'],
    [InputType.Textarea, 'textarea'],
    [InputType.Date, 'datepicker'],
  ]);

  private succeeds: boolean;
  private subscriptions: Map<string, Subscription> = new Map();
  public inputTypes = InputType;
  public fields: IInput[];
  private currentIndex = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: IInput | IInput[],
    public dataService: DataService,
    private snackbar: MatSnackBar,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {


    this.fields = Array.isArray(this.data)
      ? this.data
      : [this.data];

    const successSubscription = this.dataService.succeeds.subscribe(succeeds => {
      if (succeeds) {
        if (this.currentIndex >= this.fields.length) {
          this.matDialog.closeAll();
        } else {
          this.currentIndex++;
          this.stepper.next();
        }
      } else {
        this.snackbar.open('God fucking damn it. Tell Sheri there\'s a problem saving');
      }
    });

    this.subscriptions.set(SUCCESS_SUBSCRIPTION, successSubscription);
  }

  public ngAfterViewInit(): void {
    const calendarSubscription = this.calendar.selectedChange
      .subscribe(val => this.emit(val));

    this.subscriptions.set(CALENDAR_SUBSCRIPTION, calendarSubscription);
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  public emit(newValue: any): void {
    const response = {
      ...this.fields[this.currentIndex],
      value: newValue
    };
    this.dataService.emit(response);
  }

  public isNotNumber(option: any): boolean {
    return isNaN(option);
  }

  public get hasMultipleFields(): boolean {
    return this.fields.length > 1;
  }

  public getTemplate(field: IInput): TemplateRef<any> {
    const templateName = this.templateEquiv.get(field.type);

    return this[templateName] && this[templateName];
  }
}


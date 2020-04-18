import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { filter, tap, map, takeWhile } from 'rxjs/operators';
import { Priority, Task, Location } from '../../../../interfaces/task.interface';
import { TasksService } from '../../../../services/tasks.service';
import { IInput } from '../../../generic/input/input.component';
import { DataService } from './../../../../services/data.service';
import { InputType } from './../../../generic/input/input.component';
import { ListModalComponent, ModalData } from './../../../generic/list-modal/list-modal.component';
import { KeyValue } from '@angular/common';



@Component({
  selector: 'okay-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnChanges, OnInit {
  @Input() task: Task;
  form: FormGroup = new FormGroup({});
  details: ModalData;
  value: any;
  private subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private tasksService: TasksService,
    private matDialog: MatDialog,
    private dataService: DataService
  ) { }

  ngOnChanges(): void {
    if (!this.task) {
      console.error('Task does not exist in edit-task component.');
    }

    console.log(this.task);

    this.details = {
      priority: {
        name: 'Priority',
        value: this.task.priority,
        type: InputType.Dropdown,
        options: Priority,
        formControlName: 'priority'
      },
      location: {
        name: 'Location',
        value: this.task.location,
        options: Location,
        type: InputType.Dropdown,
        formControlName: 'location'
      },
      description: {
        name: 'Description',
        value: this.task.description,
        type: InputType.Textarea,
        formControlName: 'description'
      },
      due: {
        name: 'Due',
        value: this.task.due,
        type: InputType.Date,
        formControlName: 'due'
      }
    };
  }

  ngOnInit(): void {
    const dbUpdates = this.sendUpdatesToDB().subscribe();
    this.subscriptions.push(dbUpdates);

    if (!this.task) {
      this.openModalForNewTask();
    }
  }

  public add(): void {
    this.tasksService.update(this.form.value)
      .subscribe();
  }

  public additionalInputClass(field: IInput): string {
    return field.formControlName === 'name'
      ? 'okay-input--large'
      : '';
  }

  public openEditModal(detailName: string): MatDialogRef<ListModalComponent, any> {
    return this.matDialog.open(ListModalComponent, {
      data: this.details[detailName],
      width: '100%'
    });
  }

  private sendUpdatesToDB(): Observable<IInput> {
    return this.dataService.output.pipe(
      filter(value => !!value),
      tap(async ({ formControlName, value }) => {
        const updatedVal = { ...this.task, [formControlName]: value };
        console.log('Sending to DB', updatedVal);
        try {
          await this.tasksService.update(updatedVal).toPromise();
          this.dataService.succeeds.next(true);
          this.details[formControlName].value = value;
          this.matDialog.closeAll();
        } catch (error) {
          this.dataService.succeeds.next(false);
          console.error('Failed');
        }
      })
    );
  }

  public getValue(keyVal: KeyValue<string, IInput>): string {
    return keyVal.value && keyVal.value.value;
  }

  public hasDate(keyVal: KeyValue<string, IInput>): boolean {
    const value = (keyVal.value.value as Date);
    return !!(value && value.getDate);
  }

  public isLessThanAWeekAway(keyVal: KeyValue<string, IInput>): boolean {
    const value = (keyVal.value.value as Date);

    return +value - +new Date() <= 604800000;
  }

  private openModalForNewTask(): void {
    this.matDialog.open(ListModalComponent, {
      data: Object.values(this.details),
      width: '100%'
    });
  }
}

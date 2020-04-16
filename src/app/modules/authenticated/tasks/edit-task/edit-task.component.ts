import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { Priority, Task, Location } from '../../../../interfaces/task.interface';
import { TasksService } from '../../../../services/tasks.service';
import { IInput } from '../../../generic/input/input.component';
import { DataService } from './../../../../services/data.service';
import { InputType } from './../../../generic/input/input.component';
import { ListModalComponent, ModalData } from './../../../generic/list-modal/list-modal.component';



@Component({
  selector: 'okay-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnChanges, OnInit {

  @Input() task: Task;
  form: FormGroup = new FormGroup({});
  details: ModalData;

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
      }
    };
  }

  ngOnInit(): void {
    this.sendUpdatesToDB().subscribe();
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

  public openEditModal(detailName: string): void {
    this.matDialog.open(ListModalComponent, {
      data: this.details[detailName],
      width: '100%'
    });
  }

  private sendUpdatesToDB(): Observable<IInput> {
    return this.dataService.output.pipe(
      filter(value => !!value),
      tap(async ({formControlName, value}) => {
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

  public getValue(detail: IInput): string {
    const retrieved = this.details[detail.formControlName];

    let value;

    if (retrieved) {
      if (retrieved.options) {
        value = retrieved.options[retrieved.value];
      } else {
        value = retrieved && retrieved.value;
      }
    }
    return value;
  }
}

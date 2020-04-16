import { Observable } from 'rxjs';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog
 } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { debounceTime, takeLast, map, take } from 'node_modules/rxjs/operators';
import { Location } from '../../../../enums/location.enum';
import { Priority, Task } from '../../../../interfaces/task.interface';
import { TaskService } from '../../../../services/task.service';
import { TasksService } from '../../../../services/tasks.service';
import { IInput } from '../../../generic/input/input.component';
import { DataService } from './../../../../services/data.service';
import { InputType } from './../../../generic/input/input.component';
import { ListModalComponent, ModalData } from './../../../generic/list-modal/list-modal.component';
import { tap } from 'rxjs/operators';


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
    private taskService: TaskService,
    private router: Router,
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
      data: { [detailName]: this.details[detailName] },
      width: '100%'
    });
  }

  private sendUpdatesToDB(): Observable<IInput> {
    return this.dataService.output.pipe(
      take(1),
      tap(value => {
        if (value) {
          const updatedVal = { ...this.task, [name]: value.formControlName };
          this.tasksService.update(updatedVal).toPromise()
            .then(val => console.log(val))
            .catch(error => console.error(error));
        }
      })
    );
  }

  public getValue(detail: IInput): string {
    const retrieved = this.details[detail.formControlName];
    return retrieved &&  retrieved.value;
  }
}

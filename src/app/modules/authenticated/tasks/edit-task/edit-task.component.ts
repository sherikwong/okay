import { KeyValue } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from '../../../../interfaces/task.interface';
import { TaskService } from '../../../../services/task.service';
import { TasksService } from '../../../../services/tasks.service';
import { IInput } from '../../../generic/input/input.component';

@Component({
  selector: 'okay-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnChanges {
  @Input() task: Task;
  form: FormGroup = new FormGroup({});
  details: { [key: string]: KeyValue<string, any> };

  constructor(
    private fb: FormBuilder,
    private tasksService: TasksService,
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnChanges(): void {
    this.task = this.router.getCurrentNavigation().extras.state as Task;


    this.details = {
      dueDate: {
        key: 'Due',
        value: this.task.room
      },
      priority: {
        key: 'Priority',
        value: this.task.priority
      },

    };
  }


  public add(): void {
    this.tasksService.update(this.form.value)
      .subscribe(res => console.log(res));
  }

  public additionalInputClass(field: IInput): string {
    return field.formControlName === 'name'
      ? 'okay-input--large'
      : '';
  }
}

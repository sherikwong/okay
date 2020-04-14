import { DataService } from './../../../../services/data.service';
import { ListModalComponent } from './../../../generic/list-modal/list-modal.component';
import { Component, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Priority, Task } from '../../../../interfaces/task.interface';
import { TaskService } from '../../../../services/task.service';
import { TasksService } from '../../../../services/tasks.service';
import { IInput } from '../../../generic/input/input.component';
import { InputType } from './../../../generic/input/input.component';



@Component({
  selector: 'okay-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnChanges {
  @Input() task: Task;
  form: FormGroup = new FormGroup({});
  details: { [key: string]: IInput };

  constructor(
    private fb: FormBuilder,
    private tasksService: TasksService,
    private taskService: TaskService,
    private router: Router,
    private matDialog: MatDialog,
    private dataService: DataService
  ) { }

  ngOnChanges(): void {
    // this.task = this.router.getCurrentNavigation().extras.state as Task;
    if (!this.task) {
      console.error('Task does not exist in edit-task component.');
    }

    this.details = {
      priority: {
        name: 'Priority',
        value: this.task.priority,
        type: InputType.Dropdown,
        options: Priority
      },
      location: {
        name: 'Location',
        value: this.task.location,
        options: Location,
        type: InputType.Dropdown
      },
      description: {
        name: 'Description',
        value: this.task.description,
        type: InputType.Textarea
      }
    };

    this.dataService.output.subscribe(updatedInput => {
      if (updatedInput) {
        this.updateValue(updatedInput);
      }
    });
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

  public openEditModal(detail: string): void {
    this.matDialog.open(ListModalComponent, {
      data: this.details[detail],
      width: '100%'
    });
  }

  private updateValue(input: IInput): void {
    this.task[input.formControlName] = input.value;
    console.log(this.task);
    // this.tasksService.update()
  }
}

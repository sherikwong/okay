import { Component, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Task, Room } from '../../../../interfaces/task.interface';
import { TaskService } from '../../../../services/task.service';
import { IInput, InputType } from '../../../generic/input/input.component';

@Component({
  selector: 'okay-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnChanges {
  @Input() task: Task;
  fields: {[key: string]: IInput};
  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private tasksService: TaskService
  ) { }

  ngOnChanges(): void {
    this.fields = {
      name: {
        type: InputType.String,
        name: '',
        formControlName: 'name',
        validators: Validators.required
        // options?: '',
      },
      // room: {
      //   type: InputType.Dropdown,
      //   name: 'Room',
      //   formControlName: 'room',
      //   options: Room,
      // },
      // dueDate: {
      //   type: InputType.Date,
      //   name: 'Due date',
      //   formControlName: 'dueDate',
      //   // validators: Validators.required,
      //   // options?: '',
      // },
      // priority: {
      //   type: InputType.Range,
      //   name: 'Priority',
      //   formControlName: 'priority',
      //   validators: Validators.required,
      // },
      // {
      //   type: InputType.Textarea,
      //   name: 'Description',
      //   formControlName: 'description'
      // },
    };

    Object.values(this.fields).forEach(field => {
      this.form.addControl(field.formControlName, new FormControl());
      const control = this.form.get(field.formControlName);
      if (this.task) control.patchValue(this.task[field.formControlName]);
      if (field.validators) control.setValidators(field.validators);
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
}

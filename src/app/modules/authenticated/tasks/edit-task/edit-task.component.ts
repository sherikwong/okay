import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IInput, InputType } from '../../../generic/input/input.component';
import { Room } from '../../../../interfaces/task.interface';
import { TaskService } from '../../../../services/task.service';

@Component({
  selector: 'okay-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  fields: IInput[];
  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private tasksService: TaskService
  ) { }

  ngOnInit(): void {
    this.fields = [
      {
        type: InputType.String,
        name: 'Name',
        formControlName: 'name',
        validators: Validators.required,
        // options?: '',
      },
      // {
      //   type: InputType.String,
      //   name: 'ID',
      //   formControlName: 'id',
      //   validators: Validators.required,
      //   // options?: '',
      // },
      // {
      //   type: InputType.Dropdown,
      //   name: 'Room',
      //   formControlName: 'room',
      //   options: Room,
      // },
      // {
      //   type: InputType.Date,
      //   name: 'Due date',
      //   formControlName: 'dueDate',
      //   // validators: Validators.required,
      //   // options?: '',
      // },
      // {
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
    ];

    this.fields.forEach(field => {
      this.form.addControl(field.formControlName, new FormControl());
      if (field.validators) this.form.get(field.formControlName).setValidators(field.validators);
    });
  }


  public add(): void {
    this.tasksService.update(this.form.value)
      .subscribe(res => console.log(res));
  }
}

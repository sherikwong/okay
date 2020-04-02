import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IInput, InputType } from '../../../generic/input/input.component';
import { Room } from '../../../../interfaces/task.interface';

@Component({
  selector: 'okay-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  fields: IInput[];
  group: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder
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
      {
        type: InputType.Dropdown,
        name: 'Room',
        formControlName: 'room',
        options: Room,
      },
      {
        type: InputType.Date,
        name: 'Due date',
        formControlName: 'dueDate',
        // validators: Validators.required,
        // options?: '',
      },
      {
        type: InputType.Range,
        name: 'Priority',
        formControlName: 'priority',
        validators: Validators.required,
        // options?: '',
      }
    ];

    this.fields.forEach(field => {
      this.group.addControl(field.formControlName, new FormControl());
      if (field.validators) this.group.get(field.formControlName).setValidators(field.validators);
    });

    this.group.valueChanges.subscribe(val => console.log(val));
  }

}

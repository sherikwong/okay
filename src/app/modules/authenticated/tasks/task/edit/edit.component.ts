
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { group } from '@angular/animations';
import { InputType, IInput } from '../../../../generic/input/input.component';

@Component({
  selector: 'okay-edit-task',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditTaskComponent implements OnInit {
  public form: FormGroup;
  public inputs: IInput[] = [
    {
      type: InputType.String,
      name: 'Name',
      formControlName: 'name',
      validators: Validators.required
    },
    {
      type: InputType.Range,
      name: 'Priority',
      formControlName: 'priority',
      validators: Validators.required
    },
    {
      type: InputType.Date,
      name: 'Due Date',
      formControlName: 'dueDate',
      validators: Validators.required
    },
    {
      type: InputType.Dropdown,
      name: 'Located in',
      formControlName: 'room',
      validators: Validators.required,
      options: Location
    },
    {
      type: InputType.String,
      name: 'Description',
      formControlName: 'description',
      validators: Validators.required
    },
  ];

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    const controls = this.inputs.reduce((group, input) => {
      group[input.formControlName] = this.fb.control('');
      return group;
    }, {});
    this.form = this.fb.group(controls);
    console.log(this.form);
  }
}

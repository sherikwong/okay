
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
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
      formControlName: 'name'
    },
    {
      type: InputType.String,
      name: 'Priority',
      formControlName: 'priority'
    },
    {
      type: InputType.String,
      name: 'Due Date',
      formControlName: 'dueDate'
    },
    {
      type: InputType.String,
      name: 'Located in',
      formControlName: 'room'
    },
    {
      type: InputType.String,
      name: 'Description',
      formControlName: 'description'
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
  }
}

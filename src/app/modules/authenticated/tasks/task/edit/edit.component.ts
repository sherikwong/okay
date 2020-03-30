import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { group } from '@angular/animations';
import { InputType } from '../../../../generic/input/input.component';

@Component({
  selector: 'okay-edit-task',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditTaskComponent implements OnInit {
  public form: FormGroup;
  public inputs = [
    {
      type: InputType.String,
      name: 'Name',
      formControlName: 'name'
    },
    {
      type: InputType.String,
      priority: 'Priority',
      formControlName: 'priority'
    },
    {
      type: InputType.String,
      dueDate: 'Due Date',
      formControlName: 'dueDate'
    },
    {
      type: InputType.String,
      room: 'Located in',
      formControlName: 'room'
    },
    {
      type: InputType.String,
      description: 'Description',
      formControlName: 'description'
    },
  ];

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    console.log(this.inputs);
    const controls = this.inputs.reduce((group, input) => (group[input.formControlName] = this.fb.control('')), {});
    this.form = this.fb.group(controls);
  }

}

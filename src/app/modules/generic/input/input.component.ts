import { Component, OnInit, Input, Self } from '@angular/core';
import { FormControlDirective, NgControl } from '@angular/forms';

export enum InputType {
  Number,
  Date,
  String
}

export interface IInput {
  type: InputType,
  name: string,
  formControlName: string
}

@Component({
  selector: 'okay-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input('for') details: IInput;

  constructor(
    @Self() private control: NgControl
  ) { }

  ngOnInit(): void {
    console.log(this.control);
  }

}

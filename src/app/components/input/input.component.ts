import { Component, OnInit, Input } from '@angular/core';
import { FormControlDirective } from '@angular/forms';

export enum InputType {
  Number,
  Date,
  Text
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
    public formControlName: FormControlDirective
  ) { }

  ngOnInit(): void {
  }

}

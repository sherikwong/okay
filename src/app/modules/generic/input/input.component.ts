import { Component, OnInit, Input, Self, forwardRef, Optional } from '@angular/core';
import { FormControlDirective, NgControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputComponent)
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor {
  writeValue(obj: any): void {
    throw new Error("Method not implemented.");
  }
  registerOnChange(fn: any): void {
    throw new Error("Method not implemented.");
  }
  registerOnTouched(fn: any): void {
    throw new Error("Method not implemented.");
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }
  @Input('for') details: IInput;

  constructor(
    @Optional() @Self() private control: NgControl
  ) {
    this.control.valueAccessor = this;
  }

  ngOnInit(): void {
    // console.log(this.control);
  }

}

import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl, ValidatorFn } from '@angular/forms';
import { FormUtil } from '../../../utils/form.util';

export enum InputType {
  Number,
  Date,
  String,
  Dropdown,
  Range,
  Textarea
}

export interface IInput {
  type: InputType;
  name: string;
  formControlName: string;
  validators?: ValidatorFn;
  options?: any;
}

@Component({
  selector: 'okay-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [

  ]
})
export class InputComponent implements OnInit, ControlValueAccessor {
  public inputTypes = InputType;
  @Input('for') details: IInput;
  public isRequiredClass: string;
  public _value: any;

  constructor(
    @Optional() @Self() private ngControl: NgControl
  ) {
    this.ngControl.valueAccessor = this;
  }

  ngOnInit(): void {
    if (this.ngControl.control) {this.isRequiredClass = FormUtil.isRequired(this.ngControl.control) ? 'okay-input--required' : '';}
    console.log(this.details.formControlName, this.details);
  }

  public get value(): any {
    return this._value;
  }

  public set value(newVal: any) {
    this._value = newVal;
    this.ngControl.control.patchValue(newVal);
  }

  writeValue(obj: any): void {
    // throw new Error("Method not implemented.");
  }
  registerOnChange(fn: any): void {
    // throw new Error("Method not implemented.");
  }
  registerOnTouched(fn: any): void {
    // throw new Error("Method not implemented.");
  }
  setDisabledState?(isDisabled: boolean): void {
    // throw new Error("Method not implemented.");
  }

}

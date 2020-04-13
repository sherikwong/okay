import { Component, Input, OnChanges, Optional, Self } from '@angular/core';
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
  styleUrls: ['./input.component.scss'],
  providers: [

  ]
})
export class InputComponent implements OnChanges, ControlValueAccessor {
  public inputTypes = InputType;
  @Input('for') details: IInput;
  @Input() additionalClasses: string;
  public isRequiredClass: string;
  private _value: any;

  constructor(
    @Optional() @Self() private ngControl: NgControl
  ) {
    this.ngControl.valueAccessor = this;
  }

  ngOnChanges(): void {
    if (this.ngControl.control) {
      this.isRequiredClass = FormUtil.isRequired(this.ngControl.control) ? 'okay-input--required' : '';
      this._value = this.ngControl.control.value;
    }
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

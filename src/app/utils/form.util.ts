import { AbstractControl, FormControl } from '@angular/forms';
export abstract class FormUtil {
  public static isRequired(formControl: AbstractControl): boolean {
    const errors = formControl.validator && formControl.validator(new FormControl());
    return !!(errors && errors['required']);
  }
}

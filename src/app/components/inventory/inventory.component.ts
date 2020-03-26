import { Component, OnInit } from '@angular/core';
// import { ItemService } from '../../services/item.service';
import { IBaseItem, ICompositeItem } from '../../models/item.interface';
import { ItemService } from '../../services/item.service';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, ValidationErrors, FormControl } from '@angular/forms';

@Component({
  selector: 'okay-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  form: FormGroup;
  private randomText = 'hello';
  constructor(
    private itemService: ItemService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    console.log('Hello');
    this.itemService.query({ id: 1 });

    this.form = this.formBuilder.group({
      'a': ['', Validators.compose([Validators.required, Validators.maxLength(1)])]
    });

    // this.currentControl.valueChanges.subscribe(value => console.log(this.currentControl.errors));

    // this.form.get('a').setErrors({ 'required': true });
    // this.form.get('a').setErrors({ 'asfjafoj': true });

    this.combineIntoExistingValidators(
      // [this.generateValidatorFn('required', 'osaifjaiosfjafjioi'),
      [
        this.generateValidatorFn('maxLength', 'osaifjaiosfjafjioi'),
      this.generateValidatorFn('required', 'osaifjaiosfjafjioi', true)
    ]
    );
  }

  protected generateValidatorFn(errorName: any | string, message?: string, condition?: boolean): ValidatorFn | undefined {
    console.log('Create validator)');
    return (control: AbstractControl): ValidationErrors | undefined => {
      let result;
      // if ((this.currentControl.errors && this.currentControl.errors[errorName])) {
        // const message = this.validationMessages.get(errorName);
        // console.log(control.errors);
        // if (condition || control.hasError(errorName)) {

          result = {
            // ...this.currentControl.errors,
            [errorName]: { message: this.randomText }
          }
          // if (existingMessage || message) {
          //     result = {
          //         message: message || existingMessage
          //     }
          // }
        // }
        // }
      return result;
    };
  }

  protected combineIntoExistingValidators(additionalValidator: ValidatorFn): void;
  protected combineIntoExistingValidators(additionalValidator: ValidatorFn[]): void;
  protected combineIntoExistingValidators(additionalValidator: any): void {
    if (Array.isArray(additionalValidator)) {
      additionalValidator = Validators.compose(additionalValidator);
    }

    if (this.currentControl) {
      this.currentControl.valueChanges.subscribe(status => {
        const customErrorMessages = additionalValidator(this.currentControl);
        const currentErrors = this.currentControl.errors;

        console.log('Custom', customErrorMessages);

        if (customErrorMessages && currentErrors) {
          Object.keys(customErrorMessages)
          .filter(errorName => !currentErrors[errorName])
          .forEach(errorName => console.log(errorName));
        }

        this.currentControl.setErrors({
          ...currentErrors,
          ...customErrorMessages
        })

        console.log(currentErrors);
      });

      // this.currentControl.setValidators(Validators.compose([this.currentControl.validator, additionalValidator.bind(this)]));
    }
  }

  private get currentControl(): AbstractControl {
    return this.form && this.form.get('a');
  }
}

import { FormBuilder, Validators, FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';

export interface OkayValidationErrors {
  [key: string]: string;
}

export class Extension {
  protected form: FormGroup;

  constructor(
    protected formBuilder: FormBuilder,
  ) {
  }

  protected combineIntoExistingValidators(customMessages: ValidationErrors | string): void;
  protected combineIntoExistingValidators(customMessages: (ValidationErrors | string)[]): void {
    if (this.currentControl) {
      console.log('Adding validators');

      this.currentControl.valueChanges.subscribe(status => {
        console.log('Change');
        const currentErrors = this.currentControl.errors;

        if (currentErrors) {

          /**
           * Per custom error:
           * - Check existing errors to see if custom error name exists
           *
           * If so:
           * - If a string is provided, then look up in our common custom messages map for a corresponding message
           * - If a ValidationError obj is provided, use the value as its custom message
           */
          const handleCustomError = custom => {
            const overrideErrorName = custom.length >= 0
              ? custom
              : Object.keys(custom)[0];

            if (currentErrors[overrideErrorName]) {
              currentErrors[overrideErrorName] = {
                message: custom[overrideErrorName]
                  || this.validationMessages.get(overrideErrorName)
              };
            }
          };

          Array.isArray(customMessages) ? customMessages.forEach(handleCustomError) : handleCustomError(customMessages);
        }
        this.currentControl.setErrors(currentErrors);
        console.log(this.currentControl.errors);
      });
    }
  }

  protected get currentControl(): AbstractControl {
    return this.form && this.form.get('a');
  }

  protected hello = 'Random message';


  protected validationMessages = new Map([
    ['required', this.hello]
  ]);

  protected randomError(): ValidationErrors | undefined {
    return { aff: 'aosfijaoisfj' };
  }
}

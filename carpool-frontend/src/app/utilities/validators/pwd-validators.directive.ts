import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appPwdValidators]',
  providers: [{
    provide: NG_VALIDATORS, useExisting: PwdValidatorsDirective, multi: true
  }]
})
export class PwdValidatorsDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): { [key: string]: any } | null {

    // debugger;
    if (control.value.pwd === control.value.confPwd) {
      return null;
    } else {
      return { pwdNotSame: true };
    }
  }

}

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordValidator(
  password: string,
  confirm: string
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const pass = control.get(password);
    const confirmPass = control.get(confirm);

    return pass && confirmPass && pass.value !== confirmPass.value
      ? { mismatch: true }
      : null;
  };
}

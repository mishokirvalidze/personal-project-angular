import { FormControl, FormGroup } from '@angular/forms';
export interface IsignUpForm {
  name: FormControl<string>;
  email: FormControl<string>;
  passwordGroup: FormGroup<IPasswordGroup>;
  check: FormControl<boolean>;
}

export interface IPasswordGroup {
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
}

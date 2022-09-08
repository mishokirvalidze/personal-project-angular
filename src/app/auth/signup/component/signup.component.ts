import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IsignUpForm } from '../model/signup.model';
import { passwordValidator } from '../validator/validator';
import { SharedService } from '../../../shared/service/shared.service';
import { BehaviorSubject, tap } from 'rxjs';
import { Iregister } from '../../../shared/model/shared.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupComponent implements OnInit, OnDestroy {
  constructor(private service: SharedService, private router: Router) {}

  ngOnInit(): void {
    this.service.error.pipe(tap((data) => this.errors$.next(data))).subscribe();

    if (this.service.isLoggedIn()) {
      this.router.navigateByUrl('/');
    }
  }

  ngOnDestroy(): void {
    this.errors$.next('');
    this.formData$.unsubscribe();
  }

  private errors$ = new BehaviorSubject<string>('');
  public errors = this.errors$.asObservable();

  formData$ = new BehaviorSubject<Iregister>({
    email: '',
    password: '',
    name: '',
    cart: [],
    wishlist: [],
  });

  signUpForm = new FormGroup<IsignUpForm>({
    name: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.pattern('[A-Za-z]*'),
        Validators.minLength(2),
      ],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    passwordGroup: new FormGroup(
      {
        password: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required, Validators.minLength(7)],
        }),
        confirmPassword: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required, Validators.minLength(7)],
        }),
      },
      [passwordValidator('password', 'confirmPassword')]
    ),

    check: new FormControl(false, {
      nonNullable: true,
      validators: [Validators.requiredTrue],
    }),
  });

  public submit(): void {
    this.formData$.next({
      email: this.signUpForm.controls.email.value,
      password: this.signUpForm.controls.passwordGroup.value.password as string,
      name: this.signUpForm.controls.name.value,
      cart: [],
      wishlist: [],
    });

    this.formData$
      .pipe(
        tap((data) => {
          this.service.loginRegister(data, '/register');
        })
      )
      .subscribe();
  }

  get passwordGroup(): FormGroup {
    return this.signUpForm.get('passwordGroup') as FormGroup;
  }

  get name(): FormControl {
    return this.signUpForm.get('name') as FormControl;
  }

  get email(): FormControl {
    return this.signUpForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.passwordGroup.get('password') as FormControl;
  }

  get confirmPassword(): FormControl {
    return this.passwordGroup.get('confirmPassword') as FormControl;
  }

  get check(): FormControl {
    return this.signUpForm.get('check') as FormControl;
  }
}

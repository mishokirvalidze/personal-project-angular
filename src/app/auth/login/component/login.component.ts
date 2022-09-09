import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IloginForm } from '../model/login.model';
import { SharedService } from '../../../shared/service/shared.service';
import { Ilogin } from '../../../shared/model/shared.model';
import { BehaviorSubject, tap, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private service: SharedService, private router: Router) {}

  private unsubscribe = new Subscription();

  ngOnInit(): void {
    this.unsubscribe = this.service.error
      .pipe(tap((data) => this.errors$.next(data)))
      .subscribe();
    if (this.service.isLoggedIn()) {
      this.router.navigateByUrl('/');
    }
  }

  ngOnDestroy(): void {
    this.errors$.next('');
    this.unsubscribe.unsubscribe();
  }

  private errors$ = new BehaviorSubject<string>('');
  public errors = this.errors$.asObservable();

  loginForm = new FormGroup<IloginForm>({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  public submit(): void {
    this.service.loginRegister(this.loginForm.value as Ilogin, '/login');
  }

  get email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }
}

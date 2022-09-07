import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, EMPTY, tap } from 'rxjs';
import { Ilogin, Iregister, ReturnedData } from '../model/shared.model';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private http: HttpClient, private router: Router) {}

  private baseUrl = 'http://localhost:3000';

  private error$ = new BehaviorSubject<string>('');
  public error = this.error$.asObservable();

  private isLoggedIn$ = new BehaviorSubject<boolean>(false);
  public isSignUp = this.isLoggedIn$.asObservable();

  public loginRegister(data: Ilogin | Iregister, endPoint: string): void {
    this.http
      .post<ReturnedData>(this.baseUrl + endPoint, data)
      .pipe(
        tap((data) => {
          localStorage.setItem('id', data.user.id as unknown as string);
          localStorage.setItem('token', data.accessToken);
          this.router.navigate(['/']);
        }),

        catchError((err: HttpErrorResponse) => {
          this.error$.next(err.error);
          return EMPTY;
        })
      )
      .subscribe();
  }

  public isLoggedIn(): boolean {
    this.isLoggedIn$.next(!!localStorage.getItem('token'));
    return !!localStorage.getItem('token');
  }
}

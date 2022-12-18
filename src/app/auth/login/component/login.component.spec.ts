import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { SharedService } from '../../../shared/service/shared.service';
import { Ilogin } from '../../../shared/model/shared.model';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let service: SharedService;
  let serviceSpy: jest.SpyInstance;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [LoginComponent],
      providers: [SharedService],
    }).compileComponents();

    component = TestBed.inject(LoginComponent);
    service = TestBed.inject(SharedService);
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with email and password controls', () => {
    expect(component.loginForm.get('email')).toBeTruthy();
    expect(component.loginForm.get('password')).toBeTruthy();
  });

  it('should call the login method of the service on form submission', fakeAsync(() => {
    serviceSpy = jest.spyOn(service, 'loginRegister');
    component.loginForm.patchValue({
      email: 'test@example.com',
      password: 'password',
    });
    component.submit();
    tick();
    expect(serviceSpy).toHaveBeenCalledWith(
      { email: 'test@example.com', password: 'password' } as Ilogin,
      '/login'
    );
  }));
});


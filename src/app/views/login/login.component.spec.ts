import { TestBed, ComponentFixture, fakeAsync, waitForAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { of, throwError } from 'rxjs';

import { MessagesModule } from 'primeng/messages'
import { MessageService } from 'primeng/api';

import { LoginComponent } from './login.component';

import { DefaultService } from '@app/shared/backend/api/api';
import { AuthenticationService } from '@app/shared/auth';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authenticationService: AuthenticationService;

  const formBuilder: FormBuilder = new FormBuilder();  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule,
        MessagesModule
      ],
      declarations: [
        LoginComponent
      ],
      providers: [
        DefaultService,
        AuthenticationService,
        MessageService
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authenticationService = TestBed.inject(AuthenticationService);    

    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('username field validity', () => {
    let username = component.loginForm.controls['username'];
    expect(username.valid).toBeFalsy();
  });

  it('password field validity', () => {
    let password = component.loginForm.controls['password'];
    expect(password.valid).toBeFalsy();
  });

  it('submitting a form emits a token', fakeAsync(() => {    
    expect(component.loginForm.valid).toBeFalsy();
    component.loginForm.controls['username'].setValue("user");
    component.loginForm.controls['password'].setValue("pass");
    expect(component.loginForm.valid).toBeTruthy();

    spyOn(authenticationService, 'login').and.returnValue(of('abcd'));
    expect(component.loginError).toBeFalsy();
  }));
});

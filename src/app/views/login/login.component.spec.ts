import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MessagesModule } from 'primeng/messages'
import { MessageService } from 'primeng/api';

import { LoginComponent } from './login.component';

import { DefaultService } from '@app/shared/backend/api/api';
import { AuthenticationService } from '@app/shared/auth';

describe('LoginComponent', () => {
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

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// primeng dependencies
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { HomeComponent } from './home.component';

import { DefaultService } from '@app/shared/backend/api/api';
import { AuthenticationService } from '@app/shared/auth';

describe('HomeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,        
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        TableModule,
        ButtonModule
      ],
      declarations: [
        HomeComponent
      ],
      providers: [
        DefaultService,
        AuthenticationService
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

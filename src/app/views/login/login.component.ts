import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

import { AuthenticationService } from '@app/shared/auth';

@Component({
  selector: 'login-home',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent {
  @ViewChild('username') username: ElementRef;

  loginForm: FormGroup;
    
  returnUrl: string;
  showPassword = false;
  loginError = false;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserTokenValue) { 
      this.router.navigate(['/']);
    }
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  
  onSubmit(event) {       
      this.authenticationService.login(this.f.username.value, this.f.password.value)            
          .subscribe(data => {
              this.router.navigate([this.returnUrl]);
          },
          error => {
              this.loginError = true;                

              this.loginForm.get('username').setValue('');
              this.loginForm.get('password').setValue('');

              this.username.nativeElement.focus(); 

              console.log(error);
          });
  }
}

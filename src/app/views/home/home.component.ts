import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { InlineResponse2001 } from '@app/shared/backend/model/models';
import { DefaultService } from '@app/shared/backend/api/default.service';
import { AuthenticationService } from '@app/shared/auth';

@Component({
  selector: 'view-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {
  public loading = false;
  public transactions: InlineResponse2001[];

  constructor(private router: Router,
              private authenticationService: AuthenticationService, 
              private defaultService: DefaultService) {
  }

  ngOnInit() {
    this.getTransactions();
  }

  private getTransactions(event?) {
    this.loading = true;

    this.defaultService.transactions().subscribe(items => {
      this.loading = false;
      this.transactions = items;      
    },
    error => {
      this.loading = false;

      console.log(error);
  });
  }

  private logout(event) {
    this.authenticationService.logout()            
      .subscribe(data => {
          this.router.navigate(['login']);
      },
      error => {
          console.log(error);
          this.loading = false;
      });
  }

  public onRefresh(event) {       
    this.getTransactions(event);
  }
  

  public onLogout(event) {
    this.logout(event);
  }
}

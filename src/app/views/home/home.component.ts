import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { InlineResponse2001 } from '@app/shared/backend/model/models';
import { DefaultService } from '@app/shared/backend/api/default.service';

@Component({
  selector: 'view-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {
  loading = false;
  items: InlineResponse2001[];

  constructor(private defaultService: DefaultService) {
  }

  ngOnInit() {
    this.loading = true;
    this.defaultService.transactions().subscribe(items => {
        this.loading = false;
        this.items = items;

        console.log(items);
    });
  }
}

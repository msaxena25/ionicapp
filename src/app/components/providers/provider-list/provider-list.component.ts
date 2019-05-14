import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.scss'],
})
export class ProviderListComponent implements OnInit {
  data: any = {};

  constructor() { }

  ngOnInit() {
    this.data = {
      name: 'Mohit Saxena',
      mobileNo: '9234829429',
      completedAssignments: 12,
      rating: 2
    }

  }

  onRatingChange() {

  }

  doCall() {
    
  }


}

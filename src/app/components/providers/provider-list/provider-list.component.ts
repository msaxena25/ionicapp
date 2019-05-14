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

  getColor(num) {
    if(num > this.data.rating) {
      return 'gray';
    }

    switch (this.data.rating) {
      case 1:
      case 2:
        return 'red';
      case 3:
      case 4:
      case 5:
        return 'green';
      default:
        return 'gray';
    }

  }

}

import { Component, OnInit } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.scss'],
})
export class ProviderListComponent implements OnInit {
  data: any = {};
  providerList: any;

  constructor() { 
    this.providerList = [1,2,3,4,5];
  }

  ngOnInit() {
    this.data = {
      name: 'Mohit Saxena',
      mobileNo: '9234829429',
      completedAssignments: 12,
      rating: 2
    }

  }

  loadData($event) {

    setTimeout(() => {
      this.providerList.push(6);
      $event.target.complete();
     // $event.target.disabled = true;
    }, 2000);

  }

  onClickItem($event) {
    debugger;
  }

  onRatingChange() {

  }

  doCall() {

  }


}

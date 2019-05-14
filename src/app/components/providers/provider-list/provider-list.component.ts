import { Component, OnInit } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.scss'],
})
export class ProviderListComponent implements OnInit {
  data: any = {};
  providerList: any;

  constructor(private router: Router) { 
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
    
    let el = this.getParentElement($event.target);
    this.router.navigateByUrl('/provider-profile'); // need to create a new page for provider-portfolio
    // play will el now we have id and we can item from provider list or we can hit request to get data

  }

  
 // get parent element ion-item based on target element
  getParentElement(el){
    while(el.parentElement){
        el =  el.parentElement;
        if(el.tagName === 'ION-ITEM' && el.id) {
            return el;
        }
    }
  }

  onRatingChange() {

  }

  doCall() {

  }


}

import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private storage: Storage, private router: Router) {
    // Or to get a key/value pair
    this.storage.get('isUserLoggedIn').then((val) => {
      if(val) {
        console.log('User is logged In', val);
      //  this.router.navigateByUrl('search')
      }
      
    });

  }


}

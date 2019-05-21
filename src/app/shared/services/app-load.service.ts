import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class AppLoadService {

  constructor(private storage: Storage, private sharedService: SharedService) { }

  async initializeApp() {
    // Or to get a key/value pair
    await this.storage.get('isUserLoggedIn').then((val) => {
      if (val) {
        console.log('User is logged In', val);
       this.sharedService.isUserLoggedIn = true;
      }

    });
    console.log('app initialized');
  }
}

import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { SharedService } from './shared.service';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AppLoadService {

  constructor(private storage: Storage, private sharedService: SharedService, private platform: Platform) { }

  async initializeApp() {
    await this.storage.get('isUserLoggedIn').then((val) => {
      if (val) {
        console.log('User is logged In', val);
       this.sharedService.isUserLoggedIn = true;
      }

    });

    // For future use
    this.platform.ready().then(() =>{ 

      this.platform.backButton.subscribe(() => { 
        // code that is executed when the user pressed the back button
        // and ionic doesn't already know what to  
      //  alert('hi pressed back button');
      });
    //  console.log('app initialized');
    })

  
  }
}
